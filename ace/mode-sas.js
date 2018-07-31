ace.define(
  'ace/mode/mode-sas',
  [
    "require",
    "exports",
    "module",
    "ace/lib/oop",
    "ace/mode/text",
    "ace/ext/antlr4/token-type-map",
    "ace/ext/antlr4/tokenizer",
    "ace/mode/text_highlight_rules",
    "ace/worker/worker_client"
  ],
  function(require, exports, module) {
    var oop = require("ace/lib/oop");
    var TextMode = require("ace/mode/text").Mode;
    var tokenTypeMapping = antlr4_require('./sas-token-type-mapping');
    var createTokenTypeMap = require('ace/ext/antlr4/token-type-map').createTokenTypeMap;
    var tokenTypeToNameMap = createTokenTypeMap(tokenTypeMapping);
    var SASLexer = antlr4_require('./parser/SASLexer').SASLexer;
    var Antlr4Tokenizer = require('ace/ext/antlr4/tokenizer').Antlr4Tokenizer;

    var SASMode = function() {
    };
    oop.inherits(SASMode, TextMode);

    (function() {

      this.$id = "ace/mode/mode-sas";

      this.getTokenizer = function() {
        if (!this.$tokenizer) {
          this.$tokenizer = new Antlr4Tokenizer(SASLexer, tokenTypeToNameMap);
        }
        return this.$tokenizer;
      };

      var WorkerClient = require("ace/worker/worker_client").WorkerClient;
      this.createWorker = function(session) {
        this.$worker = new WorkerClient(["ace"], "ace/worker/worker-sas", "SASWorker");
        this.$worker.attachToDocument(session.getDocument());

        this.$worker.on("errors", function(e) {
          session.setAnnotations(e.data);
        });

        this.$worker.on("annotate", function(e) {
          session.setAnnotations(e.data);
        });

        this.$worker.on("terminate", function() {
          session.clearAnnotations();
        });

        return this.$worker;

      };

    }).call(SASMode.prototype);

    exports.Mode = SASMode;
});
