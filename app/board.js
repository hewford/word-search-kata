
const configVariables = require('../config');



// set up board as a sqaure
let blah = 'hi'
class Board {

  constructor () {
    this.wordsToSearchFor = configVariables.WORDS_TO_SEARCH_FOR.split(' ')
  }


  setUp() {
    return [[1]]
  }
    
  
}
  
module.exports = Board;