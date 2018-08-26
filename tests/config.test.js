const configVariables = require('../config');

describe("configuration variables should have correct format", () => {
  
    test("the board represented as a string should not have a space at the end of the string", () => {
      let board = configVariables.BOARD_AS_SINGLE_STRING

      expect(board[board.length-1]).not.toBe(' ')
    });


    test("the string of words to search for should not have a space at the end of the string", () => {
        let words = configVariables.WORDS_TO_SEARCH_FOR
  
        expect(words[words.length-1]).not.toBe(' ')
      });

  });