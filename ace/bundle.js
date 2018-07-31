var antlr4 = require('antlr4/index');
var antlr4_require = require;
ace.define('antlr4/index', function (require, exports, module) {
  module.exports = antlr4;
});
ace.config.setModuleUrl(
  'ace/mode/mode-sas', './mode-sas.js'
);
ace.config.setModuleUrl(
  'ace/worker/worker-sas',
  './worker-sas.js'
);
ace.define('ace/ext/antlr4/token-type-map', [], function (require, exports, module) {
  "use strict";

  /**
   * Create a token type map for an Antlr4Tokenizer.
   *
   * @example
   * <pre><code>
   * var map = createTokenTypeMap({
   *   literals: {
   *     'keyword.operator': ['+', '-'],
   *     'keyword.control': 'return'
   *   },
   *   symbols: {
   *     'identifier': 'ID',
   *     'constant.numeric': 'INT'
   *   }
   * });
   * var tokenizer = new Antlr4Tokenizer(MyLexer, tokenTypeToNameMap);
   * </pre></code>
   *
   * @param mapping
   * An object that maps ACE token types to ANTLR4 token names.
   *
   * @param {Object.<string, (string|string[])>} mapping.literals
   * An object that maps ACE token types to ANTLR4 literal tokens.
   * Literal tokens are not enclosed in quotes.
   * That means instead of <code>"'+'"</code> you just write <code>"+"</code>.
   *
   * @param {Object.<string, (string|string[])>} mapping.symbols
   * An object that maps ACE token types to ANTLR4 symbol tokens.
   *
   * @returns {AntlrTokenNameToAceTokenTypeMap}
   */
  function createTokenTypeMap(mapping) {
    var literals = mapLiterals(mapping.literals);
    var symbols = mapSymbols(mapping.symbols);
    return mergeObjects(literals, symbols);
  }

  function mergeObjects(a, b) {
    return toPairs(a).concat(toPairs(b))
      .reduce(addKeyValuePairToObject, {});
  }

  function mapLiterals(literals) {
    return mapObject(
      literals,
      function (type, tokenName) {
        return toArray(tokenName)
          .map(toLiteralName)
          .map(function (literalName) {
            return [literalName, type];
          });
      }
    );
  }

  function mapSymbols(symbols) {
    return mapObject(
      symbols,
      function reverse(type, tokenName) {
        return toArray(tokenName)
          .map(function (symbolName) {
            return [symbolName, type];
          });
      }
    );
  }

  function mapObject(obj, mapFn) {
    return toPairs(obj)
      .map(function (pair) {
        return mapFn(pair[0], pair[1]);
      })
      .reduce(flatten, [])
      .reduce(addKeyValuePairToObject, {});
  }

  function addKeyValuePairToObject(obj, pair) {
    obj[pair[0]] = pair[1];
    return obj;
  }

  function toPairs(obj) {
    return Object.keys(obj)
      .map(function (key) {
        return [key, obj[key]];
      });
  }

  function flatten(a, b) {
    return a.concat(b);
  }

  function keysWithValue(keys, value) {
    return keys.reduce(function (obj, key) {
      obj[key] = value;
      return obj;
    }, {});
  }

  function toArray(value) {
    return Array.isArray(value) ? value : [value];
  }
  function toLiteralName(name) {
    return "'" + name + "'";
  }

  module.exports = {
    createTokenTypeMap: createTokenTypeMap,
    mergeObjects: mergeObjects,
    mapLiterals: mapLiterals,
    mapSymbols: mapSymbols,
    flatten: flatten,
    keysWithValue: keysWithValue,
    mapObject: mapObject,
    toArray: toArray,
    toLiteralName: toLiteralName,
    toPairs: toPairs
  };
});
ace.define('ace/ext/antlr4/tokenizer', ['antlr4/index'], function (require, exports, module) {
  "use strict";

  var antlr4 = require('antlr4/index');

  const SkippedAntlrTokenType = -1;
  const DefaultAceTokenType = 'text';

  /**
   * Map of ANTLR4 token name to ACE token type.
   * Describes which ANTLR4 token name refers to which ACE token type ({@link https://github.com/ajaxorg/ace/wiki/Creating-or-Extending-an-Edit-Mode#common-tokens see common ACE tokens}).
   *
   * @typedef {Object.<string, string>} AntlrTokenNameToAceTokenTypeMap
   *
   * @example
   * <pre><code>
   * {
   *   "'+'": 'keyword.operator',
   *   "'-'": 'keyword.operator',
   *   "'return'": 'keyword.control',
   *   "ID": 'identifier',
   *   "INT": 'constant.numeric'
   * }
   * </pre></code>
   */

  /**
   * Tokenizer for the ACE editor that uses an ANTLR4 lexer.
   *
   * @param Lexer
   * An ANTLR4 lexer class that should be used to tokenize lines of code.
   *
   * @param {AntlrTokenNameToAceTokenTypeMap} antlrTokenNameToAceTokenType
   * Description of the syntax highlighting rules.
   *
   * @constructor
   */
  var Antlr4Tokenizer = function (Lexer, antlrTokenNameToAceTokenType) {
    this.Lexer = Lexer;
    this.antlrTokenNameToAceTokenType = antlrTokenNameToAceTokenType || {};
  };

  (function () {
    this.getLineTokens = function getLineTokens(line) {
      var stream = new antlr4.InputStream(line + '\n');
      var lexer = new this.Lexer(stream);

      // added line feed might cause token recognition error
      // that should be ignored (not logged)
      lexer.removeErrorListeners();

      var commonTokens = lexer.getAllTokens();
      removeLineFeedOfLastCommonTokenValue(commonTokens);
      var changeTokenTypeToAceType = changeTokenType(
        this.mapAntlrTokenTypeToAceType.bind(this)
      );
      var tokens = insertSkippedTokens(commonTokens, line)
        .map(mapCommonTokenToAceToken)
        .map(changeTokenTypeToAceType);
      return {
        tokens: tokens,
        state: 'start'
      };
    };

    this.getAntlrTokenName = function getAntlrTokenName(tokenType) {
      return this.Lexer.prototype.symbolicNames[tokenType] ||
        this.Lexer.prototype.literalNames[tokenType];
    };

    this.mapAntlrTokenNameToAceType = function mapAntlrTokenNameToAceType(tokenName) {
      return this.antlrTokenNameToAceTokenType[tokenName] || DefaultAceTokenType;
    };

    this.mapAntlrTokenTypeToAceType = function mapAntlrTokenTypeToAceType(tokenType) {
      return this.mapAntlrTokenNameToAceType(this.getAntlrTokenName(tokenType));
    };

  }).call(Antlr4Tokenizer.prototype);

  function removeLineFeedOfLastCommonTokenValue(commonTokens) {
    if (commonTokens.length > 0) {
      var last = commonTokens[commonTokens.length - 1];
      last.text = last.text.replace('\n', '');
    }
  }

  function changeTokenType(mapType) {
    return function (token) {
      token.type = mapType(token.type);
      return token;
    };
  }

  function mapCommonTokenToAceToken(commonToken) {
    return {
      type: commonToken.type,
      value: commonToken.text
    };
  }

  function insertSkippedTokens(tokens, line) {
    var skippedText;
    var nextTokenColumn = 0;
    var allTokens = tokens.reduce(function (acc, token) {
      skippedText = line.substring(nextTokenColumn, token.column);
      if (skippedText !== '') {
        acc.push({
          type: SkippedAntlrTokenType,
          text: skippedText,
          column: nextTokenColumn
        });
      }
      acc.push(token);
      nextTokenColumn = getEndColumnOfToken(token) + 1;
      return acc;
    }, []);
    // add skipped token at the end of the line
    skippedText = line.substr(nextTokenColumn);
    if (skippedText !== '') {
      allTokens.push({
        type: SkippedAntlrTokenType,
        text: skippedText,
        column: nextTokenColumn
      });
    }
    return allTokens;
  }

  function getEndColumnOfToken(token) {
    return token.column + token.text.length - 1;
  }

  module.exports = {
    SkippedAntlrTokenType: SkippedAntlrTokenType,
    DefaultAceTokenType: DefaultAceTokenType,
    Antlr4Tokenizer: Antlr4Tokenizer,
    removeLineFeedOfLastCommonTokenValue: removeLineFeedOfLastCommonTokenValue,
    changeTokenType: changeTokenType,
    mapCommonTokenToAceToken: mapCommonTokenToAceToken,
    insertSkippedTokens: insertSkippedTokens,
    getEndColumnOfToken: getEndColumnOfToken
  };
});
var editor = ace.edit('editor');
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode('ace/mode/mode-sas');
