
const WordSearchConfiguration = require('./boardSetUp');

class SolveWordSearch {
    constructor () {
        this.wordSearchConfiguration = new WordSearchConfiguration()
        this.wordSearchConfiguration.setUp()
        this.board = this.wordSearchConfiguration.board
        this.wordsToSearchFor = this.wordSearchConfiguration.wordsToSearchFor
    }
}

module.exports = SolveWordSearch;