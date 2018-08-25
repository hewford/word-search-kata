const WordSearchConfiguration = require('../app/boardSetUp');

/* TESTS FOR THE CONFIGURATION OF WORDS TO SEARCH FOR */
describe("Word Search should have an array of words to search for", () => {
  let wordSearchConfiguration;

  beforeEach(() => {
    wordSearchConfiguration = new WordSearchConfiguration()
  });

  test("words to search for should be an array", () => {
    expect(Array.isArray(wordSearchConfiguration.wordsToSearchFor)).toBe(true)
  });

  test("words to search array elements should be strings", () => {
    expect(wordSearchConfiguration.wordsToSearchFor.every(function(item) {
      return typeof item === "string"
    })).toBe(true)
  });
});

/* TEST FOR THE CONFIG INPUT OF THE BOARD */
describe("board should have an array of letters that represent the board", () => {
  let wordSearchConfiguration;

  beforeEach(() => {
    wordSearchConfiguration = new WordSearchConfiguration()
  });

  test("lettersArray should be an array", () => {
    expect(Array.isArray(wordSearchConfiguration.lettersArray)).toBe(true)
  });

  test("lettersArray shoud have a length greater than the longest word squared", () => {
    const longestWord = wordSearchConfiguration.wordsToSearchFor.sort(function(a, b) {
      return b.length - a.length;
    })[0];

    const minLengthOfBoardAsAString = longestWord.length * longestWord.length;

    expect(wordSearchConfiguration.lettersArray.length).toBeGreaterThan(minLengthOfBoardAsAString)
  })

  test("lettersArray should be an array of elements that are single letter strings", () => {
    expect(wordSearchConfiguration.lettersArray.every(function(item) {
      return typeof item === "string" && item.length === 1
    })).toBe(true)
  })

  test("the square root of the lettersArray has a remainder to 0 to represent a square board", () => {
    expect(Math.sqrt(wordSearchConfiguration.lettersArray.length) % 1 === 0).toBe(true)
  })

})

/* TESTS THE SET UP OF THE WORD SEARCH PUZZLE */
describe('Word Search setup building an array that represents a square board', () => {
  let wordSearchConfiguration;

  beforeEach(() => {
    wordSearchConfiguration = new WordSearchConfiguration()
    wordSearchConfiguration.setUp()
  });


  test('Set up should produce an array', () => {
    expect(Array.isArray(wordSearchConfiguration.setUp())).toBe(true)
  });

  test('Set up should produce an array of arrays', () => {
    expect(wordSearchConfiguration.setUp().every(function(row) {
      return Array.isArray(row)
    })).toBe(true)
  });

  test("Set up array's length should be equal to the length of the sub arrays", () => {
    expect(wordSearchConfiguration.setUp().length).toEqual(wordSearchConfiguration.setUp()[0].length)
  });

  test("word search Set up should define this.board and its return should be equal to the wordSearchConfiguration.board", () => {
    expect(wordSearchConfiguration.board).toEqual(wordSearchConfiguration.setUp())
  })

  test("board's first sub array's length should equal the square root of the letter's array", () => {
    expect(wordSearchConfiguration.board[0].length).toEqual(Math.sqrt(wordSearchConfiguration.lettersArray.length))
  })

  test("the board first subarray should equal the first part of the letters array", () => {
    const slicedLettersArray = wordSearchConfiguration.lettersArray.slice(0, wordSearchConfiguration.board[0].length)
    expect(wordSearchConfiguration.board[0]).toEqual(slicedLettersArray)
  })

})
