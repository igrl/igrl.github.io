// Generated from SAS.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SASListener = require('./SASListener').SASListener;
var grammarFileName = "SAS.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\'\u011c\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0003\u0002\u0007\u0002D\n\u0002",
    "\f\u0002\u000e\u0002G\u000b\u0002\u0003\u0003\u0003\u0003\u0005\u0003",
    "K\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004P\n\u0004\f",
    "\u0004\u000e\u0004S\u000b\u0004\u0003\u0004\u0003\u0004\u0007\u0004",
    "W\n\u0004\f\u0004\u000e\u0004Z\u000b\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0006\u0005`\n\u0005\r\u0005\u000e\u0005a\u0003\u0006",
    "\u0006\u0006e\n\u0006\r\u0006\u000e\u0006f\u0003\u0007\u0006\u0007j",
    "\n\u0007\r\u0007\u000e\u0007k\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0005\nt\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005",
    "\n{\n\n\u0003\u000b\u0007\u000b~\n\u000b\f\u000b\u000e\u000b\u0081\u000b",
    "\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u008e\n\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u0093\n\u000f\u0003\u000f",
    "\u0003\u000f\u0005\u000f\u0097\n\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0005\u0011\u009d\n\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0005\u0014\u00ad\n\u0014\u0003\u0015\u0003\u0015\u0005\u0015\u00b1",
    "\n\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u00b5\n\u0015\u0003\u0015",
    "\u0007\u0015\u00b8\n\u0015\f\u0015\u000e\u0015\u00bb\u000b\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0005",
    "\u0016\u00c9\n\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017",
    "\u00d4\n\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0007\u0017\u00d9",
    "\n\u0017\f\u0017\u000e\u0017\u00dc\u000b\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0005\u0018\u00e1\n\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0005\u0018\u00e7\n\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u00ef\n",
    "\u0018\u0003\u0018\u0005\u0018\u00f2\n\u0018\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0007\u0019\u00f7\n\u0019\f\u0019\u000e\u0019\u00fa\u000b",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003",
    "\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0007\u001e\u010b\n\u001e",
    "\f\u001e\u000e\u001e\u010e\u000b\u001e\u0003\u001f\u0003\u001f\u0005",
    "\u001f\u0112\n\u001f\u0003 \u0003 \u0003 \u0003 \u0003!\u0003!\u0003",
    "!\u0003!\u0003!\u0002\u0003,\"\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@\u0002\u0005\u0005",
    "\u0002\n\n\r\r\u0013\u0019\u0005\u0002\u001f\u001f\"\"$$\u0004\u0002",
    "\"\"$$\u0002\u011d\u0002E\u0003\u0002\u0002\u0002\u0004J\u0003\u0002",
    "\u0002\u0002\u0006L\u0003\u0002\u0002\u0002\b_\u0003\u0002\u0002\u0002",
    "\nd\u0003\u0002\u0002\u0002\fi\u0003\u0002\u0002\u0002\u000em\u0003",
    "\u0002\u0002\u0002\u0010o\u0003\u0002\u0002\u0002\u0012s\u0003\u0002",
    "\u0002\u0002\u0014\u007f\u0003\u0002\u0002\u0002\u0016\u0082\u0003\u0002",
    "\u0002\u0002\u0018\u0088\u0003\u0002\u0002\u0002\u001a\u008d\u0003\u0002",
    "\u0002\u0002\u001c\u008f\u0003\u0002\u0002\u0002\u001e\u0098\u0003\u0002",
    "\u0002\u0002 \u009c\u0003\u0002\u0002\u0002\"\u009e\u0003\u0002\u0002",
    "\u0002$\u00a4\u0003\u0002\u0002\u0002&\u00a8\u0003\u0002\u0002\u0002",
    "(\u00ae\u0003\u0002\u0002\u0002*\u00c8\u0003\u0002\u0002\u0002,\u00d3",
    "\u0003\u0002\u0002\u0002.\u00f1\u0003\u0002\u0002\u00020\u00f3\u0003",
    "\u0002\u0002\u00022\u00fb\u0003\u0002\u0002\u00024\u00fd\u0003\u0002",
    "\u0002\u00026\u00ff\u0003\u0002\u0002\u00028\u0101\u0003\u0002\u0002",
    "\u0002:\u010c\u0003\u0002\u0002\u0002<\u0111\u0003\u0002\u0002\u0002",
    ">\u0113\u0003\u0002\u0002\u0002@\u0117\u0003\u0002\u0002\u0002BD\u0005",
    "\u0004\u0003\u0002CB\u0003\u0002\u0002\u0002DG\u0003\u0002\u0002\u0002",
    "EC\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002F\u0003\u0003\u0002",
    "\u0002\u0002GE\u0003\u0002\u0002\u0002HK\u0005\u0006\u0004\u0002IK\u0005",
    "6\u001c\u0002JH\u0003\u0002\u0002\u0002JI\u0003\u0002\u0002\u0002K\u0005",
    "\u0003\u0002\u0002\u0002LQ\u0007\u0003\u0002\u0002MP\u0007\u001e\u0002",
    "\u0002NP\u0005\b\u0005\u0002OM\u0003\u0002\u0002\u0002ON\u0003\u0002",
    "\u0002\u0002PS\u0003\u0002\u0002\u0002QO\u0003\u0002\u0002\u0002QR\u0003",
    "\u0002\u0002\u0002RT\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002",
    "TX\u0007\u0004\u0002\u0002UW\u0005\u0018\r\u0002VU\u0003\u0002\u0002",
    "\u0002WZ\u0003\u0002\u0002\u0002XV\u0003\u0002\u0002\u0002XY\u0003\u0002",
    "\u0002\u0002Y[\u0003\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002[\\",
    "\u0007\u0005\u0002\u0002\\]\u0007\u0004\u0002\u0002]\u0007\u0003\u0002",
    "\u0002\u0002^`\u0005\u000e\b\u0002_^\u0003\u0002\u0002\u0002`a\u0003",
    "\u0002\u0002\u0002a_\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002",
    "b\t\u0003\u0002\u0002\u0002ce\u0005\u0010\t\u0002dc\u0003\u0002\u0002",
    "\u0002ef\u0003\u0002\u0002\u0002fd\u0003\u0002\u0002\u0002fg\u0003\u0002",
    "\u0002\u0002g\u000b\u0003\u0002\u0002\u0002hj\u0005\u0012\n\u0002ih",
    "\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002",
    "\u0002kl\u0003\u0002\u0002\u0002l\r\u0003\u0002\u0002\u0002mn\u0005",
    "\u0012\n\u0002n\u000f\u0003\u0002\u0002\u0002op\u0005\u0012\n\u0002",
    "p\u0011\u0003\u0002\u0002\u0002qr\u0007!\u0002\u0002rt\u0007\u0006\u0002",
    "\u0002sq\u0003\u0002\u0002\u0002st\u0003\u0002\u0002\u0002tu\u0003\u0002",
    "\u0002\u0002uz\u0007!\u0002\u0002vw\u0007\u0007\u0002\u0002wx\u0005",
    "\u0014\u000b\u0002xy\u0007\b\u0002\u0002y{\u0003\u0002\u0002\u0002z",
    "v\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002{\u0013\u0003\u0002",
    "\u0002\u0002|~\u0005\u0016\f\u0002}|\u0003\u0002\u0002\u0002~\u0081",
    "\u0003\u0002\u0002\u0002\u007f}\u0003\u0002\u0002\u0002\u007f\u0080",
    "\u0003\u0002\u0002\u0002\u0080\u0015\u0003\u0002\u0002\u0002\u0081\u007f",
    "\u0003\u0002\u0002\u0002\u0082\u0083\u0007\t\u0002\u0002\u0083\u0084",
    "\u0007\n\u0002\u0002\u0084\u0085\u0007\u0007\u0002\u0002\u0085\u0086",
    "\u0005,\u0017\u0002\u0086\u0087\u0007\b\u0002\u0002\u0087\u0017\u0003",
    "\u0002\u0002\u0002\u0088\u0089\u0005\u001a\u000e\u0002\u0089\u0019\u0003",
    "\u0002\u0002\u0002\u008a\u008e\u0005*\u0016\u0002\u008b\u008e\u0005",
    "\u001c\u000f\u0002\u008c\u008e\u0005&\u0014\u0002\u008d\u008a\u0003",
    "\u0002\u0002\u0002\u008d\u008b\u0003\u0002\u0002\u0002\u008d\u008c\u0003",
    "\u0002\u0002\u0002\u008e\u001b\u0003\u0002\u0002\u0002\u008f\u0090\u0007",
    "\u000b\u0002\u0002\u0090\u0092\u0005\n\u0006\u0002\u0091\u0093\u0005",
    "\u001e\u0010\u0002\u0092\u0091\u0003\u0002\u0002\u0002\u0092\u0093\u0003",
    "\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002\u0094\u0096\u0007",
    "\u0004\u0002\u0002\u0095\u0097\u0005(\u0015\u0002\u0096\u0095\u0003",
    "\u0002\u0002\u0002\u0096\u0097\u0003\u0002\u0002\u0002\u0097\u001d\u0003",
    "\u0002\u0002\u0002\u0098\u0099\u0005 \u0011\u0002\u0099\u001f\u0003",
    "\u0002\u0002\u0002\u009a\u009d\u0005\"\u0012\u0002\u009b\u009d\u0005",
    "$\u0013\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009c\u009b\u0003",
    "\u0002\u0002\u0002\u009d!\u0003\u0002\u0002\u0002\u009e\u009f\u0007",
    "\f\u0002\u0002\u009f\u00a0\u0007\n\u0002\u0002\u00a0\u00a1\u0007!\u0002",
    "\u0002\u00a1\u00a2\u0007\r\u0002\u0002\u00a2\u00a3\u0007\u000e\u0002",
    "\u0002\u00a3#\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007\u000f\u0002",
    "\u0002\u00a5\u00a6\u0007\n\u0002\u0002\u00a6\u00a7\u0007!\u0002\u0002",
    "\u00a7%\u0003\u0002\u0002\u0002\u00a8\u00a9\u0007\u0010\u0002\u0002",
    "\u00a9\u00aa\u0005\n\u0006\u0002\u00aa\u00ac\u0007\u0004\u0002\u0002",
    "\u00ab\u00ad\u0005(\u0015\u0002\u00ac\u00ab\u0003\u0002\u0002\u0002",
    "\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad\'\u0003\u0002\u0002\u0002",
    "\u00ae\u00b0\u0007\u0011\u0002\u0002\u00af\u00b1\u0007\u0012\u0002\u0002",
    "\u00b0\u00af\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002",
    "\u00b1\u00b2\u0003\u0002\u0002\u0002\u00b2\u00b9\u0007!\u0002\u0002",
    "\u00b3\u00b5\u0007\u0012\u0002\u0002\u00b4\u00b3\u0003\u0002\u0002\u0002",
    "\u00b4\u00b5\u0003\u0002\u0002\u0002\u00b5\u00b6\u0003\u0002\u0002\u0002",
    "\u00b6\u00b8\u0007!\u0002\u0002\u00b7\u00b4\u0003\u0002\u0002\u0002",
    "\u00b8\u00bb\u0003\u0002\u0002\u0002\u00b9\u00b7\u0003\u0002\u0002\u0002",
    "\u00b9\u00ba\u0003\u0002\u0002\u0002\u00ba\u00bc\u0003\u0002\u0002\u0002",
    "\u00bb\u00b9\u0003\u0002\u0002\u0002\u00bc\u00bd\u0007\u0004\u0002\u0002",
    "\u00bd)\u0003\u0002\u0002\u0002\u00be\u00bf\u0007!\u0002\u0002\u00bf",
    "\u00c0\u0007\n\u0002\u0002\u00c0\u00c1\u0005,\u0017\u0002\u00c1\u00c2",
    "\u0007\u0004\u0002\u0002\u00c2\u00c9\u0003\u0002\u0002\u0002\u00c3\u00c4",
    "\u0007!\u0002\u0002\u00c4\u00c5\u0007\n\u0002\u0002\u00c5\u00c6\u0005",
    ",\u0017\u0002\u00c6\u00c7\b\u0016\u0001\u0002\u00c7\u00c9\u0003\u0002",
    "\u0002\u0002\u00c8\u00be\u0003\u0002\u0002\u0002\u00c8\u00c3\u0003\u0002",
    "\u0002\u0002\u00c9+\u0003\u0002\u0002\u0002\u00ca\u00cb\b\u0017\u0001",
    "\u0002\u00cb\u00d4\u0005.\u0018\u0002\u00cc\u00d4\u00052\u001a\u0002",
    "\u00cd\u00d4\u0007!\u0002\u0002\u00ce\u00cf\u0007\u0007\u0002\u0002",
    "\u00cf\u00d0\u0005,\u0017\u0002\u00d0\u00d1\u0007\b\u0002\u0002\u00d1",
    "\u00d4\u0003\u0002\u0002\u0002\u00d2\u00d4\u0007 \u0002\u0002\u00d3",
    "\u00ca\u0003\u0002\u0002\u0002\u00d3\u00cc\u0003\u0002\u0002\u0002\u00d3",
    "\u00cd\u0003\u0002\u0002\u0002\u00d3\u00ce\u0003\u0002\u0002\u0002\u00d3",
    "\u00d2\u0003\u0002\u0002\u0002\u00d4\u00da\u0003\u0002\u0002\u0002\u00d5",
    "\u00d6\f\u0007\u0002\u0002\u00d6\u00d7\t\u0002\u0002\u0002\u00d7\u00d9",
    "\u0005,\u0017\b\u00d8\u00d5\u0003\u0002\u0002\u0002\u00d9\u00dc\u0003",
    "\u0002\u0002\u0002\u00da\u00d8\u0003\u0002\u0002\u0002\u00da\u00db\u0003",
    "\u0002\u0002\u0002\u00db-\u0003\u0002\u0002\u0002\u00dc\u00da\u0003",
    "\u0002\u0002\u0002\u00dd\u00de\u0007!\u0002\u0002\u00de\u00e0\u0007",
    "\u0007\u0002\u0002\u00df\u00e1\u00050\u0019\u0002\u00e0\u00df\u0003",
    "\u0002\u0002\u0002\u00e0\u00e1\u0003\u0002\u0002\u0002\u00e1\u00e2\u0003",
    "\u0002\u0002\u0002\u00e2\u00f2\u0007\b\u0002\u0002\u00e3\u00e4\u0007",
    "!\u0002\u0002\u00e4\u00e6\u0007\u0007\u0002\u0002\u00e5\u00e7\u0005",
    "0\u0019\u0002\u00e6\u00e5\u0003\u0002\u0002\u0002\u00e6\u00e7\u0003",
    "\u0002\u0002\u0002\u00e7\u00e8\u0003\u0002\u0002\u0002\u00e8\u00e9\u0007",
    "\b\u0002\u0002\u00e9\u00ea\u0007\b\u0002\u0002\u00ea\u00f2\b\u0018\u0001",
    "\u0002\u00eb\u00ec\u0007!\u0002\u0002\u00ec\u00ee\u0007\u0007\u0002",
    "\u0002\u00ed\u00ef\u00050\u0019\u0002\u00ee\u00ed\u0003\u0002\u0002",
    "\u0002\u00ee\u00ef\u0003\u0002\u0002\u0002\u00ef\u00f0\u0003\u0002\u0002",
    "\u0002\u00f0\u00f2\b\u0018\u0001\u0002\u00f1\u00dd\u0003\u0002\u0002",
    "\u0002\u00f1\u00e3\u0003\u0002\u0002\u0002\u00f1\u00eb\u0003\u0002\u0002",
    "\u0002\u00f2/\u0003\u0002\u0002\u0002\u00f3\u00f8\u0005,\u0017\u0002",
    "\u00f4\u00f5\u0007\u001a\u0002\u0002\u00f5\u00f7\u0005,\u0017\u0002",
    "\u00f6\u00f4\u0003\u0002\u0002\u0002\u00f7\u00fa\u0003\u0002\u0002\u0002",
    "\u00f8\u00f6\u0003\u0002\u0002\u0002\u00f8\u00f9\u0003\u0002\u0002\u0002",
    "\u00f91\u0003\u0002\u0002\u0002\u00fa\u00f8\u0003\u0002\u0002\u0002",
    "\u00fb\u00fc\t\u0003\u0002\u0002\u00fc3\u0003\u0002\u0002\u0002\u00fd",
    "\u00fe\t\u0004\u0002\u0002\u00fe5\u0003\u0002\u0002\u0002\u00ff\u0100",
    "\u00058\u001d\u0002\u01007\u0003\u0002\u0002\u0002\u0101\u0102\u0007",
    "\u001b\u0002\u0002\u0102\u0103\u0007\u001c\u0002\u0002\u0103\u0104\u0005",
    ":\u001e\u0002\u0104\u0105\u0007\u0004\u0002\u0002\u0105\u0106\u0005",
    "(\u0015\u0002\u0106\u0107\u0007\u0005\u0002\u0002\u0107\u0108\u0007",
    "\u0004\u0002\u0002\u01089\u0003\u0002\u0002\u0002\u0109\u010b\u0005",
    "<\u001f\u0002\u010a\u0109\u0003\u0002\u0002\u0002\u010b\u010e\u0003",
    "\u0002\u0002\u0002\u010c\u010a\u0003\u0002\u0002\u0002\u010c\u010d\u0003",
    "\u0002\u0002\u0002\u010d;\u0003\u0002\u0002\u0002\u010e\u010c\u0003",
    "\u0002\u0002\u0002\u010f\u0112\u0005> \u0002\u0110\u0112\u0005@!\u0002",
    "\u0111\u010f\u0003\u0002\u0002\u0002\u0111\u0110\u0003\u0002\u0002\u0002",
    "\u0112=\u0003\u0002\u0002\u0002\u0113\u0114\u0007\u0003\u0002\u0002",
    "\u0114\u0115\u0007\n\u0002\u0002\u0115\u0116\u0005\u0010\t\u0002\u0116",
    "?\u0003\u0002\u0002\u0002\u0117\u0118\u0007\u001d\u0002\u0002\u0118",
    "\u0119\u0007\n\u0002\u0002\u0119\u011a\u0005\u000e\b\u0002\u011aA\u0003",
    "\u0002\u0002\u0002\u001fEJOQXafksz\u007f\u008d\u0092\u0096\u009c\u00ac",
    "\u00b0\u00b4\u00b9\u00c8\u00d3\u00da\u00e0\u00e6\u00ee\u00f1\u00f8\u010c",
    "\u0111"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'data'", "';'", "'run'", "'.'", "'('", "')'", 
                     "'where'", "'='", "'set'", "'key'", "'/'", "'unique'", 
                     "'end'", "'merge'", "'by'", "'descending'", "'*'", 
                     "'+'", "'-'", "'||'", "'!!'", "'and'", "'or'", "','", 
                     "'proc'", "'sort'", "'out'", "'_null_'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, "DATA_NULL", "CHAR", "FMT", "ID", "INT", "DIGIT", 
                      "FLOAT", "NL", "WS", "COMMENT" ];

var ruleNames =  [ "file", "globalStatement", "dataStep", "datasetListOutput", 
                   "datasetListInput", "datasetList", "datasetOutput", "datasetInput", 
                   "dataset", "datasetOptionList", "datasetOption", "dataStepStatementList", 
                   "dataStepStatement", "set", "setOptionList", "setOption", 
                   "setOptionKey", "setOptionEnd", "merge", "by", "assignment", 
                   "expression", "functionCall", "expr_list", "literal", 
                   "numberLiteral", "proc", "procSort", "procSortOptionList", 
                   "procSortOption", "procSortOptionData", "procSortOptionOut" ];

function SASParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SASParser.prototype = Object.create(antlr4.Parser.prototype);
SASParser.prototype.constructor = SASParser;

Object.defineProperty(SASParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SASParser.EOF = antlr4.Token.EOF;
SASParser.T__0 = 1;
SASParser.T__1 = 2;
SASParser.T__2 = 3;
SASParser.T__3 = 4;
SASParser.T__4 = 5;
SASParser.T__5 = 6;
SASParser.T__6 = 7;
SASParser.T__7 = 8;
SASParser.T__8 = 9;
SASParser.T__9 = 10;
SASParser.T__10 = 11;
SASParser.T__11 = 12;
SASParser.T__12 = 13;
SASParser.T__13 = 14;
SASParser.T__14 = 15;
SASParser.T__15 = 16;
SASParser.T__16 = 17;
SASParser.T__17 = 18;
SASParser.T__18 = 19;
SASParser.T__19 = 20;
SASParser.T__20 = 21;
SASParser.T__21 = 22;
SASParser.T__22 = 23;
SASParser.T__23 = 24;
SASParser.T__24 = 25;
SASParser.T__25 = 26;
SASParser.T__26 = 27;
SASParser.DATA_NULL = 28;
SASParser.CHAR = 29;
SASParser.FMT = 30;
SASParser.ID = 31;
SASParser.INT = 32;
SASParser.DIGIT = 33;
SASParser.FLOAT = 34;
SASParser.NL = 35;
SASParser.WS = 36;
SASParser.COMMENT = 37;

SASParser.RULE_file = 0;
SASParser.RULE_globalStatement = 1;
SASParser.RULE_dataStep = 2;
SASParser.RULE_datasetListOutput = 3;
SASParser.RULE_datasetListInput = 4;
SASParser.RULE_datasetList = 5;
SASParser.RULE_datasetOutput = 6;
SASParser.RULE_datasetInput = 7;
SASParser.RULE_dataset = 8;
SASParser.RULE_datasetOptionList = 9;
SASParser.RULE_datasetOption = 10;
SASParser.RULE_dataStepStatementList = 11;
SASParser.RULE_dataStepStatement = 12;
SASParser.RULE_set = 13;
SASParser.RULE_setOptionList = 14;
SASParser.RULE_setOption = 15;
SASParser.RULE_setOptionKey = 16;
SASParser.RULE_setOptionEnd = 17;
SASParser.RULE_merge = 18;
SASParser.RULE_by = 19;
SASParser.RULE_assignment = 20;
SASParser.RULE_expression = 21;
SASParser.RULE_functionCall = 22;
SASParser.RULE_expr_list = 23;
SASParser.RULE_literal = 24;
SASParser.RULE_numberLiteral = 25;
SASParser.RULE_proc = 26;
SASParser.RULE_procSort = 27;
SASParser.RULE_procSortOptionList = 28;
SASParser.RULE_procSortOption = 29;
SASParser.RULE_procSortOptionData = 30;
SASParser.RULE_procSortOptionOut = 31;

function FileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_file;
    return this;
}

FileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileContext.prototype.constructor = FileContext;

FileContext.prototype.globalStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(GlobalStatementContext);
    } else {
        return this.getTypedRuleContext(GlobalStatementContext,i);
    }
};

FileContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterFile(this);
	}
};

FileContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitFile(this);
	}
};




SASParser.FileContext = FileContext;

SASParser.prototype.file = function() {

    var localctx = new FileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SASParser.RULE_file);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SASParser.T__0 || _la===SASParser.T__24) {
            this.state = 64;
            this.globalStatement();
            this.state = 69;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GlobalStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_globalStatement;
    return this;
}

GlobalStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GlobalStatementContext.prototype.constructor = GlobalStatementContext;

GlobalStatementContext.prototype.dataStep = function() {
    return this.getTypedRuleContext(DataStepContext,0);
};

GlobalStatementContext.prototype.proc = function() {
    return this.getTypedRuleContext(ProcContext,0);
};

GlobalStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterGlobalStatement(this);
	}
};

GlobalStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitGlobalStatement(this);
	}
};




SASParser.GlobalStatementContext = GlobalStatementContext;

SASParser.prototype.globalStatement = function() {

    var localctx = new GlobalStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SASParser.RULE_globalStatement);
    try {
        this.state = 72;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SASParser.T__0:
            this.enterOuterAlt(localctx, 1);
            this.state = 70;
            this.dataStep();
            break;
        case SASParser.T__24:
            this.enterOuterAlt(localctx, 2);
            this.state = 71;
            this.proc();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DataStepContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_dataStep;
    return this;
}

DataStepContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataStepContext.prototype.constructor = DataStepContext;

DataStepContext.prototype.DATA_NULL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SASParser.DATA_NULL);
    } else {
        return this.getToken(SASParser.DATA_NULL, i);
    }
};


DataStepContext.prototype.datasetListOutput = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DatasetListOutputContext);
    } else {
        return this.getTypedRuleContext(DatasetListOutputContext,i);
    }
};

DataStepContext.prototype.dataStepStatementList = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DataStepStatementListContext);
    } else {
        return this.getTypedRuleContext(DataStepStatementListContext,i);
    }
};

DataStepContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterDataStep(this);
	}
};

DataStepContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitDataStep(this);
	}
};




SASParser.DataStepContext = DataStepContext;

SASParser.prototype.dataStep = function() {

    var localctx = new DataStepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SASParser.RULE_dataStep);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.match(SASParser.T__0);
        this.state = 79;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SASParser.DATA_NULL || _la===SASParser.ID) {
            this.state = 77;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case SASParser.DATA_NULL:
                this.state = 75;
                this.match(SASParser.DATA_NULL);
                break;
            case SASParser.ID:
                this.state = 76;
                this.datasetListOutput();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 81;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 82;
        this.match(SASParser.T__1);
        this.state = 86;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SASParser.T__8) | (1 << SASParser.T__13) | (1 << SASParser.ID))) !== 0)) {
            this.state = 83;
            this.dataStepStatementList();
            this.state = 88;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 89;
        this.match(SASParser.T__2);
        this.state = 90;
        this.match(SASParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DatasetListOutputContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_datasetListOutput;
    return this;
}

DatasetListOutputContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DatasetListOutputContext.prototype.constructor = DatasetListOutputContext;

DatasetListOutputContext.prototype.datasetOutput = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DatasetOutputContext);
    } else {
        return this.getTypedRuleContext(DatasetOutputContext,i);
    }
};

DatasetListOutputContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterDatasetListOutput(this);
	}
};

DatasetListOutputContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitDatasetListOutput(this);
	}
};




SASParser.DatasetListOutputContext = DatasetListOutputContext;

SASParser.prototype.datasetListOutput = function() {

    var localctx = new DatasetListOutputContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SASParser.RULE_datasetListOutput);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 92;
        		this.datasetOutput();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 95; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DatasetListInputContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_datasetListInput;
    return this;
}

DatasetListInputContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DatasetListInputContext.prototype.constructor = DatasetListInputContext;

DatasetListInputContext.prototype.datasetInput = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DatasetInputContext);
    } else {
        return this.getTypedRuleContext(DatasetInputContext,i);
    }
};

DatasetListInputContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterDatasetListInput(this);
	}
};

DatasetListInputContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitDatasetListInput(this);
	}
};




SASParser.DatasetListInputContext = DatasetListInputContext;

SASParser.prototype.datasetListInput = function() {

    var localctx = new DatasetListInputContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SASParser.RULE_datasetListInput);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 98; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 97;
            this.datasetInput();
            this.state = 100; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SASParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DatasetListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_datasetList;
    return this;
}

DatasetListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DatasetListContext.prototype.constructor = DatasetListContext;

DatasetListContext.prototype.dataset = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DatasetContext);
    } else {
        return this.getTypedRuleContext(DatasetContext,i);
    }
};

DatasetListContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterDatasetList(this);
	}
};

DatasetListContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitDatasetList(this);
	}
};




SASParser.DatasetListContext = DatasetListContext;

SASParser.prototype.datasetList = function() {

    var localctx = new DatasetListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SASParser.RULE_datasetList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 102;
            this.dataset();
            this.state = 105; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SASParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DatasetOutputContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_datasetOutput;
    return this;
}

DatasetOutputContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DatasetOutputContext.prototype.constructor = DatasetOutputContext;

DatasetOutputContext.prototype.dataset = function() {
    return this.getTypedRuleContext(DatasetContext,0);
};

DatasetOutputContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterDatasetOutput(this);
	}
};

DatasetOutputContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitDatasetOutput(this);
	}
};




SASParser.DatasetOutputContext = DatasetOutputContext;

SASParser.prototype.datasetOutput = function() {

    var localctx = new DatasetOutputContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SASParser.RULE_datasetOutput);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this.dataset();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DatasetInputContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_datasetInput;
    return this;
}

DatasetInputContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DatasetInputContext.prototype.constructor = DatasetInputContext;

DatasetInputContext.prototype.dataset = function() {
    return this.getTypedRuleContext(DatasetContext,0);
};

DatasetInputContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterDatasetInput(this);
	}
};

DatasetInputContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitDatasetInput(this);
	}
};




SASParser.DatasetInputContext = DatasetInputContext;

SASParser.prototype.datasetInput = function() {

    var localctx = new DatasetInputContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SASParser.RULE_datasetInput);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        this.dataset();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DatasetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_dataset;
    return this;
}

DatasetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DatasetContext.prototype.constructor = DatasetContext;

DatasetContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SASParser.ID);
    } else {
        return this.getToken(SASParser.ID, i);
    }
};


DatasetContext.prototype.datasetOptionList = function() {
    return this.getTypedRuleContext(DatasetOptionListContext,0);
};

DatasetContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterDataset(this);
	}
};

DatasetContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitDataset(this);
	}
};




SASParser.DatasetContext = DatasetContext;

SASParser.prototype.dataset = function() {

    var localctx = new DatasetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SASParser.RULE_dataset);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        if(la_===1) {
            this.state = 111;
            this.match(SASParser.ID);
            this.state = 112;
            this.match(SASParser.T__3);

        }
        this.state = 115;
        this.match(SASParser.ID);
        this.state = 120;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SASParser.T__4) {
            this.state = 116;
            this.match(SASParser.T__4);
            this.state = 117;
            this.datasetOptionList();
            this.state = 118;
            this.match(SASParser.T__5);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DatasetOptionListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_datasetOptionList;
    return this;
}

DatasetOptionListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DatasetOptionListContext.prototype.constructor = DatasetOptionListContext;

DatasetOptionListContext.prototype.datasetOption = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DatasetOptionContext);
    } else {
        return this.getTypedRuleContext(DatasetOptionContext,i);
    }
};

DatasetOptionListContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterDatasetOptionList(this);
	}
};

DatasetOptionListContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitDatasetOptionList(this);
	}
};




SASParser.DatasetOptionListContext = DatasetOptionListContext;

SASParser.prototype.datasetOptionList = function() {

    var localctx = new DatasetOptionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SASParser.RULE_datasetOptionList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SASParser.T__6) {
            this.state = 122;
            this.datasetOption();
            this.state = 127;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DatasetOptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_datasetOption;
    return this;
}

DatasetOptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DatasetOptionContext.prototype.constructor = DatasetOptionContext;

DatasetOptionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

DatasetOptionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterDatasetOption(this);
	}
};

DatasetOptionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitDatasetOption(this);
	}
};




SASParser.DatasetOptionContext = DatasetOptionContext;

SASParser.prototype.datasetOption = function() {

    var localctx = new DatasetOptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SASParser.RULE_datasetOption);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this.match(SASParser.T__6);
        this.state = 129;
        this.match(SASParser.T__7);
        this.state = 130;
        this.match(SASParser.T__4);
        this.state = 131;
        this.expression(0);
        this.state = 132;
        this.match(SASParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DataStepStatementListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_dataStepStatementList;
    return this;
}

DataStepStatementListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataStepStatementListContext.prototype.constructor = DataStepStatementListContext;

DataStepStatementListContext.prototype.dataStepStatement = function() {
    return this.getTypedRuleContext(DataStepStatementContext,0);
};

DataStepStatementListContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterDataStepStatementList(this);
	}
};

DataStepStatementListContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitDataStepStatementList(this);
	}
};




SASParser.DataStepStatementListContext = DataStepStatementListContext;

SASParser.prototype.dataStepStatementList = function() {

    var localctx = new DataStepStatementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SASParser.RULE_dataStepStatementList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        this.dataStepStatement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DataStepStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_dataStepStatement;
    return this;
}

DataStepStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataStepStatementContext.prototype.constructor = DataStepStatementContext;

DataStepStatementContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

DataStepStatementContext.prototype.set = function() {
    return this.getTypedRuleContext(SetContext,0);
};

DataStepStatementContext.prototype.merge = function() {
    return this.getTypedRuleContext(MergeContext,0);
};

DataStepStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterDataStepStatement(this);
	}
};

DataStepStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitDataStepStatement(this);
	}
};




SASParser.DataStepStatementContext = DataStepStatementContext;

SASParser.prototype.dataStepStatement = function() {

    var localctx = new DataStepStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SASParser.RULE_dataStepStatement);
    try {
        this.state = 139;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SASParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 136;
            this.assignment();
            break;
        case SASParser.T__8:
            this.enterOuterAlt(localctx, 2);
            this.state = 137;
            this.set();
            break;
        case SASParser.T__13:
            this.enterOuterAlt(localctx, 3);
            this.state = 138;
            this.merge();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_set;
    return this;
}

SetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetContext.prototype.constructor = SetContext;

SetContext.prototype.datasetListInput = function() {
    return this.getTypedRuleContext(DatasetListInputContext,0);
};

SetContext.prototype.setOptionList = function() {
    return this.getTypedRuleContext(SetOptionListContext,0);
};

SetContext.prototype.by = function() {
    return this.getTypedRuleContext(ByContext,0);
};

SetContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterSet(this);
	}
};

SetContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitSet(this);
	}
};




SASParser.SetContext = SetContext;

SASParser.prototype.set = function() {

    var localctx = new SetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, SASParser.RULE_set);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        this.match(SASParser.T__8);
        this.state = 142;
        this.datasetListInput();
        this.state = 144;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SASParser.T__9 || _la===SASParser.T__12) {
            this.state = 143;
            this.setOptionList();
        }

        this.state = 146;
        this.match(SASParser.T__1);
        this.state = 148;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SASParser.T__14) {
            this.state = 147;
            this.by();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SetOptionListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_setOptionList;
    return this;
}

SetOptionListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetOptionListContext.prototype.constructor = SetOptionListContext;

SetOptionListContext.prototype.setOption = function() {
    return this.getTypedRuleContext(SetOptionContext,0);
};

SetOptionListContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterSetOptionList(this);
	}
};

SetOptionListContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitSetOptionList(this);
	}
};




SASParser.SetOptionListContext = SetOptionListContext;

SASParser.prototype.setOptionList = function() {

    var localctx = new SetOptionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SASParser.RULE_setOptionList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 150;
        this.setOption();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SetOptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_setOption;
    return this;
}

SetOptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetOptionContext.prototype.constructor = SetOptionContext;

SetOptionContext.prototype.setOptionKey = function() {
    return this.getTypedRuleContext(SetOptionKeyContext,0);
};

SetOptionContext.prototype.setOptionEnd = function() {
    return this.getTypedRuleContext(SetOptionEndContext,0);
};

SetOptionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterSetOption(this);
	}
};

SetOptionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitSetOption(this);
	}
};




SASParser.SetOptionContext = SetOptionContext;

SASParser.prototype.setOption = function() {

    var localctx = new SetOptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SASParser.RULE_setOption);
    try {
        this.state = 154;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SASParser.T__9:
            this.enterOuterAlt(localctx, 1);
            this.state = 152;
            this.setOptionKey();
            break;
        case SASParser.T__12:
            this.enterOuterAlt(localctx, 2);
            this.state = 153;
            this.setOptionEnd();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SetOptionKeyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_setOptionKey;
    return this;
}

SetOptionKeyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetOptionKeyContext.prototype.constructor = SetOptionKeyContext;

SetOptionKeyContext.prototype.ID = function() {
    return this.getToken(SASParser.ID, 0);
};

SetOptionKeyContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterSetOptionKey(this);
	}
};

SetOptionKeyContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitSetOptionKey(this);
	}
};




SASParser.SetOptionKeyContext = SetOptionKeyContext;

SASParser.prototype.setOptionKey = function() {

    var localctx = new SetOptionKeyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, SASParser.RULE_setOptionKey);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 156;
        this.match(SASParser.T__9);
        this.state = 157;
        this.match(SASParser.T__7);
        this.state = 158;
        this.match(SASParser.ID);

        this.state = 159;
        this.match(SASParser.T__10);
        this.state = 160;
        this.match(SASParser.T__11);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SetOptionEndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_setOptionEnd;
    return this;
}

SetOptionEndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetOptionEndContext.prototype.constructor = SetOptionEndContext;

SetOptionEndContext.prototype.ID = function() {
    return this.getToken(SASParser.ID, 0);
};

SetOptionEndContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterSetOptionEnd(this);
	}
};

SetOptionEndContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitSetOptionEnd(this);
	}
};




SASParser.SetOptionEndContext = SetOptionEndContext;

SASParser.prototype.setOptionEnd = function() {

    var localctx = new SetOptionEndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, SASParser.RULE_setOptionEnd);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        this.match(SASParser.T__12);
        this.state = 163;
        this.match(SASParser.T__7);
        this.state = 164;
        this.match(SASParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MergeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_merge;
    return this;
}

MergeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MergeContext.prototype.constructor = MergeContext;

MergeContext.prototype.datasetListInput = function() {
    return this.getTypedRuleContext(DatasetListInputContext,0);
};

MergeContext.prototype.by = function() {
    return this.getTypedRuleContext(ByContext,0);
};

MergeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterMerge(this);
	}
};

MergeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitMerge(this);
	}
};




SASParser.MergeContext = MergeContext;

SASParser.prototype.merge = function() {

    var localctx = new MergeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, SASParser.RULE_merge);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        this.match(SASParser.T__13);
        this.state = 167;
        this.datasetListInput();
        this.state = 168;
        this.match(SASParser.T__1);
        this.state = 170;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SASParser.T__14) {
            this.state = 169;
            this.by();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ByContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_by;
    return this;
}

ByContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ByContext.prototype.constructor = ByContext;

ByContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SASParser.ID);
    } else {
        return this.getToken(SASParser.ID, i);
    }
};


ByContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterBy(this);
	}
};

ByContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitBy(this);
	}
};




SASParser.ByContext = ByContext;

SASParser.prototype.by = function() {

    var localctx = new ByContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, SASParser.RULE_by);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.match(SASParser.T__14);
        this.state = 174;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SASParser.T__15) {
            this.state = 173;
            this.match(SASParser.T__15);
        }

        this.state = 176;
        this.match(SASParser.ID);
        this.state = 183;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SASParser.T__15 || _la===SASParser.ID) {
            this.state = 178;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SASParser.T__15) {
                this.state = 177;
                this.match(SASParser.T__15);
            }

            this.state = 180;
            this.match(SASParser.ID);
            this.state = 185;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 186;
        this.match(SASParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_assignment;
    return this;
}

AssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentContext.prototype.constructor = AssignmentContext;

AssignmentContext.prototype.ID = function() {
    return this.getToken(SASParser.ID, 0);
};

AssignmentContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterAssignment(this);
	}
};

AssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitAssignment(this);
	}
};




SASParser.AssignmentContext = AssignmentContext;

SASParser.prototype.assignment = function() {

    var localctx = new AssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, SASParser.RULE_assignment);
    try {
        this.state = 198;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 188;
            this.match(SASParser.ID);
            this.state = 189;
            this.match(SASParser.T__7);
            this.state = 190;
            this.expression(0);
            this.state = 191;
            this.match(SASParser.T__1);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 193;
            this.match(SASParser.ID);
            this.state = 194;
            this.match(SASParser.T__7);
            this.state = 195;
            this.expression(0);
             this.notifyErrorListeners("Missing ';' at the end of the statement."); 
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

ExpressionContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

ExpressionContext.prototype.ID = function() {
    return this.getToken(SASParser.ID, 0);
};

ExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionContext.prototype.FMT = function() {
    return this.getToken(SASParser.FMT, 0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitExpression(this);
	}
};



SASParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 42;
    this.enterRecursionRule(localctx, 42, SASParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 209;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.state = 201;
            this.functionCall();
            break;

        case 2:
            this.state = 202;
            this.literal();
            break;

        case 3:
            this.state = 203;
            this.match(SASParser.ID);
            break;

        case 4:
            this.state = 204;
            this.match(SASParser.T__4);
            this.state = 205;
            this.expression(0);
            this.state = 206;
            this.match(SASParser.T__5);
            break;

        case 5:
            this.state = 208;
            this.match(SASParser.FMT);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 216;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ExpressionContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, SASParser.RULE_expression);
                this.state = 211;
                if (!( this.precpred(this._ctx, 5))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                }
                this.state = 212;
                _la = this._input.LA(1);
                if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SASParser.T__7) | (1 << SASParser.T__10) | (1 << SASParser.T__16) | (1 << SASParser.T__17) | (1 << SASParser.T__18) | (1 << SASParser.T__19) | (1 << SASParser.T__20) | (1 << SASParser.T__21) | (1 << SASParser.T__22))) !== 0))) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 213;
                this.expression(6); 
            }
            this.state = 218;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function FunctionCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_functionCall;
    return this;
}

FunctionCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallContext.prototype.constructor = FunctionCallContext;

FunctionCallContext.prototype.ID = function() {
    return this.getToken(SASParser.ID, 0);
};

FunctionCallContext.prototype.expr_list = function() {
    return this.getTypedRuleContext(Expr_listContext,0);
};

FunctionCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterFunctionCall(this);
	}
};

FunctionCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitFunctionCall(this);
	}
};




SASParser.FunctionCallContext = FunctionCallContext;

SASParser.prototype.functionCall = function() {

    var localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, SASParser.RULE_functionCall);
    var _la = 0; // Token type
    try {
        this.state = 239;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 219;
            this.match(SASParser.ID);
            this.state = 220;
            this.match(SASParser.T__4);
            this.state = 222;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 5)) & ~0x1f) == 0 && ((1 << (_la - 5)) & ((1 << (SASParser.T__4 - 5)) | (1 << (SASParser.CHAR - 5)) | (1 << (SASParser.FMT - 5)) | (1 << (SASParser.ID - 5)) | (1 << (SASParser.INT - 5)) | (1 << (SASParser.FLOAT - 5)))) !== 0)) {
                this.state = 221;
                this.expr_list();
            }

            this.state = 224;
            this.match(SASParser.T__5);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 225;
            this.match(SASParser.ID);
            this.state = 226;
            this.match(SASParser.T__4);
            this.state = 228;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 5)) & ~0x1f) == 0 && ((1 << (_la - 5)) & ((1 << (SASParser.T__4 - 5)) | (1 << (SASParser.CHAR - 5)) | (1 << (SASParser.FMT - 5)) | (1 << (SASParser.ID - 5)) | (1 << (SASParser.INT - 5)) | (1 << (SASParser.FLOAT - 5)))) !== 0)) {
                this.state = 227;
                this.expr_list();
            }

            this.state = 230;
            this.match(SASParser.T__5);
            this.state = 231;
            this.match(SASParser.T__5);
             this.notifyErrorListeners("Extra closing ')'."); 
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 233;
            this.match(SASParser.ID);
            this.state = 234;
            this.match(SASParser.T__4);
            this.state = 236;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
            if(la_===1) {
                this.state = 235;
                this.expr_list();

            }
             this.notifyErrorListeners("Missing closing ')'."); 
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Expr_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_expr_list;
    return this;
}

Expr_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expr_listContext.prototype.constructor = Expr_listContext;

Expr_listContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

Expr_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterExpr_list(this);
	}
};

Expr_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitExpr_list(this);
	}
};




SASParser.Expr_listContext = Expr_listContext;

SASParser.prototype.expr_list = function() {

    var localctx = new Expr_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, SASParser.RULE_expr_list);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 241;
        this.expression(0);
        this.state = 246;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 242;
                this.match(SASParser.T__23);
                this.state = 243;
                this.expression(0); 
            }
            this.state = 248;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.INT = function() {
    return this.getToken(SASParser.INT, 0);
};

LiteralContext.prototype.FLOAT = function() {
    return this.getToken(SASParser.FLOAT, 0);
};

LiteralContext.prototype.CHAR = function() {
    return this.getToken(SASParser.CHAR, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitLiteral(this);
	}
};




SASParser.LiteralContext = LiteralContext;

SASParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, SASParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
        _la = this._input.LA(1);
        if(!(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (SASParser.CHAR - 29)) | (1 << (SASParser.INT - 29)) | (1 << (SASParser.FLOAT - 29)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_numberLiteral;
    return this;
}

NumberLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberLiteralContext.prototype.constructor = NumberLiteralContext;

NumberLiteralContext.prototype.INT = function() {
    return this.getToken(SASParser.INT, 0);
};

NumberLiteralContext.prototype.FLOAT = function() {
    return this.getToken(SASParser.FLOAT, 0);
};

NumberLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterNumberLiteral(this);
	}
};

NumberLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitNumberLiteral(this);
	}
};




SASParser.NumberLiteralContext = NumberLiteralContext;

SASParser.prototype.numberLiteral = function() {

    var localctx = new NumberLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, SASParser.RULE_numberLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 251;
        _la = this._input.LA(1);
        if(!(_la===SASParser.INT || _la===SASParser.FLOAT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ProcContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_proc;
    return this;
}

ProcContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProcContext.prototype.constructor = ProcContext;

ProcContext.prototype.procSort = function() {
    return this.getTypedRuleContext(ProcSortContext,0);
};

ProcContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterProc(this);
	}
};

ProcContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitProc(this);
	}
};




SASParser.ProcContext = ProcContext;

SASParser.prototype.proc = function() {

    var localctx = new ProcContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, SASParser.RULE_proc);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 253;
        this.procSort();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ProcSortContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_procSort;
    return this;
}

ProcSortContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProcSortContext.prototype.constructor = ProcSortContext;

ProcSortContext.prototype.procSortOptionList = function() {
    return this.getTypedRuleContext(ProcSortOptionListContext,0);
};

ProcSortContext.prototype.by = function() {
    return this.getTypedRuleContext(ByContext,0);
};

ProcSortContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterProcSort(this);
	}
};

ProcSortContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitProcSort(this);
	}
};




SASParser.ProcSortContext = ProcSortContext;

SASParser.prototype.procSort = function() {

    var localctx = new ProcSortContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, SASParser.RULE_procSort);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 255;
        this.match(SASParser.T__24);
        this.state = 256;
        this.match(SASParser.T__25);
        this.state = 257;
        this.procSortOptionList();
        this.state = 258;
        this.match(SASParser.T__1);
        this.state = 259;
        this.by();
        this.state = 260;
        this.match(SASParser.T__2);
        this.state = 261;
        this.match(SASParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ProcSortOptionListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_procSortOptionList;
    return this;
}

ProcSortOptionListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProcSortOptionListContext.prototype.constructor = ProcSortOptionListContext;

ProcSortOptionListContext.prototype.procSortOption = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ProcSortOptionContext);
    } else {
        return this.getTypedRuleContext(ProcSortOptionContext,i);
    }
};

ProcSortOptionListContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterProcSortOptionList(this);
	}
};

ProcSortOptionListContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitProcSortOptionList(this);
	}
};




SASParser.ProcSortOptionListContext = ProcSortOptionListContext;

SASParser.prototype.procSortOptionList = function() {

    var localctx = new ProcSortOptionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, SASParser.RULE_procSortOptionList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 266;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SASParser.T__0 || _la===SASParser.T__26) {
            this.state = 263;
            this.procSortOption();
            this.state = 268;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ProcSortOptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_procSortOption;
    return this;
}

ProcSortOptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProcSortOptionContext.prototype.constructor = ProcSortOptionContext;

ProcSortOptionContext.prototype.procSortOptionData = function() {
    return this.getTypedRuleContext(ProcSortOptionDataContext,0);
};

ProcSortOptionContext.prototype.procSortOptionOut = function() {
    return this.getTypedRuleContext(ProcSortOptionOutContext,0);
};

ProcSortOptionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterProcSortOption(this);
	}
};

ProcSortOptionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitProcSortOption(this);
	}
};




SASParser.ProcSortOptionContext = ProcSortOptionContext;

SASParser.prototype.procSortOption = function() {

    var localctx = new ProcSortOptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, SASParser.RULE_procSortOption);
    try {
        this.state = 271;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SASParser.T__0:
            this.enterOuterAlt(localctx, 1);
            this.state = 269;
            this.procSortOptionData();
            break;
        case SASParser.T__26:
            this.enterOuterAlt(localctx, 2);
            this.state = 270;
            this.procSortOptionOut();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ProcSortOptionDataContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_procSortOptionData;
    return this;
}

ProcSortOptionDataContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProcSortOptionDataContext.prototype.constructor = ProcSortOptionDataContext;

ProcSortOptionDataContext.prototype.datasetInput = function() {
    return this.getTypedRuleContext(DatasetInputContext,0);
};

ProcSortOptionDataContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterProcSortOptionData(this);
	}
};

ProcSortOptionDataContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitProcSortOptionData(this);
	}
};




SASParser.ProcSortOptionDataContext = ProcSortOptionDataContext;

SASParser.prototype.procSortOptionData = function() {

    var localctx = new ProcSortOptionDataContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, SASParser.RULE_procSortOptionData);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 273;
        this.match(SASParser.T__0);
        this.state = 274;
        this.match(SASParser.T__7);
        this.state = 275;
        this.datasetInput();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ProcSortOptionOutContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SASParser.RULE_procSortOptionOut;
    return this;
}

ProcSortOptionOutContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProcSortOptionOutContext.prototype.constructor = ProcSortOptionOutContext;

ProcSortOptionOutContext.prototype.datasetOutput = function() {
    return this.getTypedRuleContext(DatasetOutputContext,0);
};

ProcSortOptionOutContext.prototype.enterRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.enterProcSortOptionOut(this);
	}
};

ProcSortOptionOutContext.prototype.exitRule = function(listener) {
    if(listener instanceof SASListener ) {
        listener.exitProcSortOptionOut(this);
	}
};




SASParser.ProcSortOptionOutContext = ProcSortOptionOutContext;

SASParser.prototype.procSortOptionOut = function() {

    var localctx = new ProcSortOptionOutContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, SASParser.RULE_procSortOptionOut);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 277;
        this.match(SASParser.T__26);
        this.state = 278;
        this.match(SASParser.T__7);
        this.state = 279;
        this.datasetOutput();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


SASParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 21:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

SASParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.SASParser = SASParser;
