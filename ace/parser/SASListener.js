// Generated from SAS.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SASParser.
function SASListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SASListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SASListener.prototype.constructor = SASListener;

// Enter a parse tree produced by SASParser#file.
SASListener.prototype.enterFile = function(ctx) {
};

// Exit a parse tree produced by SASParser#file.
SASListener.prototype.exitFile = function(ctx) {
};


// Enter a parse tree produced by SASParser#globalStatement.
SASListener.prototype.enterGlobalStatement = function(ctx) {
};

// Exit a parse tree produced by SASParser#globalStatement.
SASListener.prototype.exitGlobalStatement = function(ctx) {
};


// Enter a parse tree produced by SASParser#dataStep.
SASListener.prototype.enterDataStep = function(ctx) {
};

// Exit a parse tree produced by SASParser#dataStep.
SASListener.prototype.exitDataStep = function(ctx) {
};


// Enter a parse tree produced by SASParser#datasetListOutput.
SASListener.prototype.enterDatasetListOutput = function(ctx) {
};

// Exit a parse tree produced by SASParser#datasetListOutput.
SASListener.prototype.exitDatasetListOutput = function(ctx) {
};


// Enter a parse tree produced by SASParser#datasetListInput.
SASListener.prototype.enterDatasetListInput = function(ctx) {
};

// Exit a parse tree produced by SASParser#datasetListInput.
SASListener.prototype.exitDatasetListInput = function(ctx) {
};


// Enter a parse tree produced by SASParser#datasetList.
SASListener.prototype.enterDatasetList = function(ctx) {
};

// Exit a parse tree produced by SASParser#datasetList.
SASListener.prototype.exitDatasetList = function(ctx) {
};


// Enter a parse tree produced by SASParser#datasetOutput.
SASListener.prototype.enterDatasetOutput = function(ctx) {
};

// Exit a parse tree produced by SASParser#datasetOutput.
SASListener.prototype.exitDatasetOutput = function(ctx) {
};


// Enter a parse tree produced by SASParser#datasetInput.
SASListener.prototype.enterDatasetInput = function(ctx) {
};

// Exit a parse tree produced by SASParser#datasetInput.
SASListener.prototype.exitDatasetInput = function(ctx) {
};


// Enter a parse tree produced by SASParser#dataset.
SASListener.prototype.enterDataset = function(ctx) {
};

// Exit a parse tree produced by SASParser#dataset.
SASListener.prototype.exitDataset = function(ctx) {
};


// Enter a parse tree produced by SASParser#datasetOptionList.
SASListener.prototype.enterDatasetOptionList = function(ctx) {
};

// Exit a parse tree produced by SASParser#datasetOptionList.
SASListener.prototype.exitDatasetOptionList = function(ctx) {
};


// Enter a parse tree produced by SASParser#datasetOption.
SASListener.prototype.enterDatasetOption = function(ctx) {
};

// Exit a parse tree produced by SASParser#datasetOption.
SASListener.prototype.exitDatasetOption = function(ctx) {
};


// Enter a parse tree produced by SASParser#dataStepStatementList.
SASListener.prototype.enterDataStepStatementList = function(ctx) {
};

// Exit a parse tree produced by SASParser#dataStepStatementList.
SASListener.prototype.exitDataStepStatementList = function(ctx) {
};


// Enter a parse tree produced by SASParser#dataStepStatement.
SASListener.prototype.enterDataStepStatement = function(ctx) {
};

// Exit a parse tree produced by SASParser#dataStepStatement.
SASListener.prototype.exitDataStepStatement = function(ctx) {
};


// Enter a parse tree produced by SASParser#set.
SASListener.prototype.enterSet = function(ctx) {
};

// Exit a parse tree produced by SASParser#set.
SASListener.prototype.exitSet = function(ctx) {
};


// Enter a parse tree produced by SASParser#setOptionList.
SASListener.prototype.enterSetOptionList = function(ctx) {
};

// Exit a parse tree produced by SASParser#setOptionList.
SASListener.prototype.exitSetOptionList = function(ctx) {
};


// Enter a parse tree produced by SASParser#setOption.
SASListener.prototype.enterSetOption = function(ctx) {
};

// Exit a parse tree produced by SASParser#setOption.
SASListener.prototype.exitSetOption = function(ctx) {
};


// Enter a parse tree produced by SASParser#setOptionKey.
SASListener.prototype.enterSetOptionKey = function(ctx) {
};

// Exit a parse tree produced by SASParser#setOptionKey.
SASListener.prototype.exitSetOptionKey = function(ctx) {
};


// Enter a parse tree produced by SASParser#setOptionEnd.
SASListener.prototype.enterSetOptionEnd = function(ctx) {
};

// Exit a parse tree produced by SASParser#setOptionEnd.
SASListener.prototype.exitSetOptionEnd = function(ctx) {
};


// Enter a parse tree produced by SASParser#merge.
SASListener.prototype.enterMerge = function(ctx) {
};

// Exit a parse tree produced by SASParser#merge.
SASListener.prototype.exitMerge = function(ctx) {
};


// Enter a parse tree produced by SASParser#by.
SASListener.prototype.enterBy = function(ctx) {
};

// Exit a parse tree produced by SASParser#by.
SASListener.prototype.exitBy = function(ctx) {
};


// Enter a parse tree produced by SASParser#assignment.
SASListener.prototype.enterAssignment = function(ctx) {
};

// Exit a parse tree produced by SASParser#assignment.
SASListener.prototype.exitAssignment = function(ctx) {
};


// Enter a parse tree produced by SASParser#expression.
SASListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by SASParser#expression.
SASListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by SASParser#functionCall.
SASListener.prototype.enterFunctionCall = function(ctx) {
};

// Exit a parse tree produced by SASParser#functionCall.
SASListener.prototype.exitFunctionCall = function(ctx) {
};


// Enter a parse tree produced by SASParser#expr_list.
SASListener.prototype.enterExpr_list = function(ctx) {
};

// Exit a parse tree produced by SASParser#expr_list.
SASListener.prototype.exitExpr_list = function(ctx) {
};


// Enter a parse tree produced by SASParser#literal.
SASListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by SASParser#literal.
SASListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by SASParser#numberLiteral.
SASListener.prototype.enterNumberLiteral = function(ctx) {
};

// Exit a parse tree produced by SASParser#numberLiteral.
SASListener.prototype.exitNumberLiteral = function(ctx) {
};


// Enter a parse tree produced by SASParser#proc.
SASListener.prototype.enterProc = function(ctx) {
};

// Exit a parse tree produced by SASParser#proc.
SASListener.prototype.exitProc = function(ctx) {
};


// Enter a parse tree produced by SASParser#procSort.
SASListener.prototype.enterProcSort = function(ctx) {
};

// Exit a parse tree produced by SASParser#procSort.
SASListener.prototype.exitProcSort = function(ctx) {
};


// Enter a parse tree produced by SASParser#procSortOptionList.
SASListener.prototype.enterProcSortOptionList = function(ctx) {
};

// Exit a parse tree produced by SASParser#procSortOptionList.
SASListener.prototype.exitProcSortOptionList = function(ctx) {
};


// Enter a parse tree produced by SASParser#procSortOption.
SASListener.prototype.enterProcSortOption = function(ctx) {
};

// Exit a parse tree produced by SASParser#procSortOption.
SASListener.prototype.exitProcSortOption = function(ctx) {
};


// Enter a parse tree produced by SASParser#procSortOptionData.
SASListener.prototype.enterProcSortOptionData = function(ctx) {
};

// Exit a parse tree produced by SASParser#procSortOptionData.
SASListener.prototype.exitProcSortOptionData = function(ctx) {
};


// Enter a parse tree produced by SASParser#procSortOptionOut.
SASListener.prototype.enterProcSortOptionOut = function(ctx) {
};

// Exit a parse tree produced by SASParser#procSortOptionOut.
SASListener.prototype.exitProcSortOptionOut = function(ctx) {
};



exports.SASListener = SASListener;