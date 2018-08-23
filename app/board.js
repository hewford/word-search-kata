
const configVariables = require('../config');



// set up board as a sqaure

class WordSearch {

  constructor () {
    this.wordsToSearchFor = configVariables.WORDS_TO_SEARCH_FOR.split(' ')

    this.board = []
  }


  setUp() {
    return [[1]]
  }
    
  
}
  
module.exports = WordSearch;