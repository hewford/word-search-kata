
const configVariables = require('../config');



// set up board as a sqaure

class WordSearch {

  constructor () {
    this.wordsToSearchFor = configVariables.WORDS_TO_SEARCH_FOR.split(' ');

    this.boardArray = configVariables.BOARD_AS_SINGLE_STRING.split(' ');

    this.board = [[1]];

  }

  setUp() {
    return [[1]]
  }
    
  
}
  
module.exports = WordSearch;