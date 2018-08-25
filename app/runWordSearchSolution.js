const WordSearchQuery = require('../app/solveWordSearch');
const WordSearchConfiguration = require('../app/boardSetUp');
const configVariables = require('../config');

const wordSearchConfiguration = new WordSearchConfiguration()
wordSearchConfiguration.setUp()

const wordSearchQuery = new WordSearchQuery(wordSearchConfiguration.wordsToSearchFor)

wordSearchConfiguration.wordsToSearchFor.forEach((word) => {
    wordSearchQuery.startSearchQuery(word, wordSearchConfiguration.board)
})

console.log('\n============================\nHere is the solution:\n')
console.log(wordSearchQuery.solution)
console.log('\nThank you\n============================\n')