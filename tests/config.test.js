const configVariables = require('../config');

describe("configuration variables should have correct format", () => {
  
    test("the board represented as a string should not have a space at the END of the string", () => {
      let board = configVariables.BOARD_AS_SINGLE_STRING

      jest.setTimeout(1000);

      // This is the most common user error when setting up the configuration. So I wanted it throw a big error. 
      if ( board[board.length-1] == ' ') {
        throw console.error('=====================================================\nTHERE IS A SPACE AT THE END OF BOARD_AS_SINGLE_STRING\n=====================================================');
      }
        
      expect(board[board.length-1]).not.toBe(' ')
    });

    test("the board represented as a string should not have a space at the BEGINNING of the string", () => {
        let board = configVariables.BOARD_AS_SINGLE_STRING
  
        expect(board[0]).not.toBe(' ')
      });

    test("the string of words to search for should not have a space at the END of the string", () => {
        let words = configVariables.WORDS_TO_SEARCH_FOR
  
        expect(words[words.length-1]).not.toBe(' ')
      });

      test("the string of words to search for should not have a space at the BEGINNING of the string", () => {
        let words = configVariables.WORDS_TO_SEARCH_FOR
  
        expect(words[0]).not.toBe(' ')
      });

  });
