module.exports = {
  symbols: {
    'identifier': 'ID',
    'constant.numeric': ['INT', 'FLOAT'],
    'constant.language': 'DATA_NULL',
    'constant.other': 'FMT',
    'string.quoted': 'CHAR',
    'comment': 'COMMENT'
  },
  literals: {
    'keyword.control': ['data', 'set', 'proc', 'sort', 'by', 'run', 'merge', 'where', 'while', 'out'],
    'keyword.operator': ['=', '*', '/', '+', '-', '||', '!!', 'and', 'or'],
    'paren.lparen': ['(', '{', '['],
    'paren.rparen': [')', '}', ']'],
    'punctuation.operator': [',', ';', '.'],
  }
};
