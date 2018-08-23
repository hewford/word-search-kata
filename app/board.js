
const configVariables = require('../config');



// set up board as a sqaure

class WordSearch {

  constructor () {
    this.wordsToSearchFor = configVariables.WORDS_TO_SEARCH_FOR.split(' ');

    this.lettersArray = configVariables.BOARD_AS_SINGLE_STRING.split(' ');

    this.board = [];

  }

  setUp() {
    const rowLength = Math.sqrt(this.lettersArray.length)
    let lettersIndex = 0;
    for (let i = 0; i < rowLength; i++) {
      let row = []

      for (let j = 0; j < rowLength; j++) {
        row.push(this.lettersArray[lettersIndex])
        lettersIndex++;
      }

      this.board[i] = row
    }
    console.log(this.board)
    return this.board
  }
    
  
}
  
module.exports = WordSearch;
