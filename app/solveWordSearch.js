const WordSearchConfiguration = require('../app/boardSetUp');
const configVariables = require('../config');

class WordSearchQuery {
  constructor(words) {
    // initialize the object that will contain the solution
    this.solution = {}

    words.forEach((word) => {
      this.solution[word] = '';
    })

    this.foundWord = '';

    this.matchedWordLength = 0;
  }

  searchHorizontallyToRight(that, word, board, rowIndex, letterIndex) {
    for (let i = 1; i < word.length; i++) {
      if (word[i] === board[rowIndex][letterIndex + i]) {

        that.matchedWordLength++

        that.foundWord = that.foundWord.concat(', ', '(' + (letterIndex + i) + ', ' + (rowIndex) + ')')

      }
    }
  }

  searchHorizontallyToLeft(that, word, board, rowIndex, letterIndex) {
    for (let i = 1; i < word.length; i++) {

      if (word[i] === board[rowIndex][letterIndex - i]) {

        that.matchedWordLength++

          that.foundWord = that.foundWord.concat(', ', '(' + (letterIndex - i) + ', ' + (rowIndex) + ')')

      }
    }
  }

  searchVerticallyUpwards(that, word, board, rowIndex, letterIndex) {
    for (let i = 1; i < word.length; i++) {

      // check for a negative value so that code doesn't look for a negative index in an array.
      if (rowIndex - i < 0) {
        break;
      }

      // if next letter is found, store the coordinate
      else if (word[i] === board[rowIndex - i][letterIndex]) {

        that.matchedWordLength++

          that.foundWord = that.foundWord.concat(', ', '(' + (letterIndex) + ', ' + (rowIndex - i) + ')')
      }
    }
  }

  searchVerticallyDownwards(that, word, board, rowIndex, letterIndex) {
    for (let i = 1; i < word.length; i++) {
      // check for a negative value so that code doesn't look for a negative index in an array.
      if (board[rowIndex + i] === undefined) {
        break;
      }

      // if next letter is found, store the coordinate
      else if (word[i] === board[rowIndex + i][letterIndex]) {

        that.matchedWordLength++

          that.foundWord = that.foundWord.concat(', ', '(' + (letterIndex) + ', ' + (rowIndex + i) + ')')

      }
    }
  }

  searchDiagonallyDownAndRight(that, word, board, rowIndex, letterIndex) {
    for (let i = 1; i < word.length; i++) {
      // check for a negative value so that code doesn't look for a negative index in an array.
      if (board[rowIndex + i] === undefined) {
        break;
      }

      // if next letter is found, store the coordinate
      if (word[i] === board[rowIndex + i][letterIndex + i]) {

        that.matchedWordLength++

          that.foundWord = that.foundWord.concat(', ', '(' + (letterIndex + i) + ', ' + (rowIndex + i) + ')')

      }
    }
  };

  searchDiagonallyDownAndLeft(that, word, board, rowIndex, letterIndex) {
    for (let i = 1; i < word.length; i++) {
      // check for a negative value so that code doesn't look for a negative index in an array.
      if (board[rowIndex + i] === undefined) {
        break;
      }

      // if next letter is found, store the coordinate
      if (word[i] === board[rowIndex + i][letterIndex - i]) {

        that.matchedWordLength++

          that.foundWord = that.foundWord.concat(', ', '(' + (letterIndex - i) + ', ' + (rowIndex + i) + ')')

      }
    }
  };

  searchDiagonallyUpAndRight(that, word, board, rowIndex, letterIndex) {
    for (let i = 1; i < word.length; i++) {
      // check for a negative value so that code doesn't look for a negative index in an array.
      if (board[rowIndex - i] === undefined) {
        break;
      }

      // if next letter is found, store the coordinate
      if (word[i] === board[rowIndex - i][letterIndex + i]) {

        that.matchedWordLength++

          that.foundWord = that.foundWord.concat(', ', '(' + (letterIndex + i) + ', ' + (rowIndex - i) + ')')

      }
    }
  };

  searchDiagonallyUpAndLeft(that, word, board, rowIndex, letterIndex) {
    for (let i = 1; i < word.length; i++) {
      // check for a negative value so that code doesn't look for a negative index in an array.
      if (board[rowIndex - i] === undefined) {
        break;
      }
      // if next letter is found, store the coordinate
      if (word[i] === board[rowIndex - i][letterIndex - i]) {

        that.matchedWordLength++

          that.foundWord = that.foundWord.concat(', ', '(' + (letterIndex - i) + ', ' + (rowIndex - i) + ')')

      }
    }
  };

  startSearchQuery(word, board) {
    this.matchedWordLength = 0;
    this.foundWord = '';

    // search each letter in each row
    board.some((row, rowIndex) => {
      if (this.matchedWordLength === word.length) {
        return this.foundWord;
      }

      row.some((letter, letterIndex) => {

        // take in an argument that calls one of the searches above
        const searchSurroundingLetters = (direction) => {

          if (this.matchedWordLength === word.length) {
            return this.foundWord;
          } else {
            this.foundWord = '(' + letterIndex + ', ' + rowIndex + ')'
            this.matchedWordLength = 1
            return direction(this, word, board, rowIndex, letterIndex)
          }
        }


        if (this.matchedWordLength === word.length) {
          return this.foundWord;

        } else if (word[0] === letter) {

          this.foundWord = '(' + letterIndex + ', ' + rowIndex + ')'
          this.matchedWordLength = 1

          /* === SEARCH RIGHT ===*/
          searchSurroundingLetters(this.searchHorizontallyToRight)

          /* === SEARCH LEFT ===*/
          searchSurroundingLetters(this.searchHorizontallyToLeft)

          /* === SEARCH UP ===*/
          searchSurroundingLetters(this.searchVerticallyUpwards)

          /* === SEARCH DOWN ===*/
          searchSurroundingLetters(this.searchVerticallyDownwards)

          /* === SEARCH DOWN & RIGHT ===*/
          searchSurroundingLetters(this.searchDiagonallyDownAndRight)

          /* === SEARCH DOWN & LEFT ===*/
          searchSurroundingLetters(this.searchDiagonallyDownAndLeft)

          /* === SEARCH UP & RIGHT ===*/
          searchSurroundingLetters(this.searchDiagonallyUpAndRight)

          /* === SEARCH UP & LEFT ===*/
          searchSurroundingLetters(this.searchDiagonallyUpAndLeft)
 
        }
      })
    })

    if (this.matchedWordLength !== word.length) {
      this.foundWord = "word not found"
    }

    this.solution[word] = this.foundWord;

    return this.foundWord

  }

}

const wordSearchConfiguration = new WordSearchConfiguration()
    wordSearchConfiguration.setUp()
    
    const wordSearchQuery = new WordSearchQuery(wordSearchConfiguration.wordsToSearchFor)

    wordSearchQuery.startSearchQuery(wordSearchConfiguration.wordsToSearchFor[0], wordSearchConfiguration.board)


module.exports = WordSearchQuery;
