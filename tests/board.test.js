const WordSearchSetUp = require('../app/board');

/* TESTS FOR THE CONFIGURATION OF WORDS TO SEARCH FOR */
describe("Word Search should have an array of words to search for", () => {
    let wordSearchSetUp;

    beforeEach(() => {
        wordSearchSetUp = new WordSearchSetUp()
    });

    test("words to search for should be an array", () => {
        expect(Array.isArray(wordSearchSetUp.wordsToSearchFor)).toBe(true)
    });

    test("words to search array elements should be strings", () => {
        expect(wordSearchSetUp.wordsToSearchFor.every(function(item){ return typeof item === "string" })).toBe(true)
    })
    
})

/* TEST FOR THE CONFIG INPUT OF THE BOARD */
describe("board should have an array of letters that represent the board", () => {
    let wordSearchSetUp;

    beforeEach(() => {
        wordSearchSetUp = new WordSearchSetUp()
    });

    test("lettersArray should be an array", () => {
        expect(Array.isArray(wordSearchSetUp.lettersArray)).toBe(true)
    });

    test("lettersArray shoud have a length greater than the longest word squared", () => {
        const longestWord = wordSearchSetUp.wordsToSearchFor.sort(function (a, b) { return b.length - a.length; })[0];

        const minLengthOfBoardAsAString = longestWord.length*longestWord.length;

        expect(wordSearchSetUp.lettersArray.length).toBeGreaterThan(minLengthOfBoardAsAString)
    })

    test("lettersArray should be an array of elements that are single letter strings", () => {
        expect(wordSearchSetUp.lettersArray.every(function(item){
            return typeof item === "string" && item.length === 1
        })).toBe(true)
    })

    test("the square root of the lettersArray has a remainder to 0 to represent a square board", () => {
        expect(Math.sqrt(wordSearchSetUp.lettersArray.length) % 1 === 0).toBe(true)
    })

})

/* TESTS THE SET UP OF THE WORD SEARCH PUZZLE */
describe('Word Search setup building an array that represents a square board', () => {
    let wordSearchSetUp;

    beforeEach(() => {
        wordSearchSetUp = new WordSearchSetUp()
        wordSearchSetUp.setUp()
    });


    test('Set up should produce an array', () => {
        expect(Array.isArray(wordSearchSetUp.setUp())).toBe(true)
    });

    test('Set up should produce an array of arrays', () => {
        expect(wordSearchSetUp.setUp().every(function(row){ 
            return Array.isArray(row)
        })).toBe(true)
    });

    test("Set up array's length should be equal to the length of the sub arrays", () => {
        expect(wordSearchSetUp.setUp().length).toEqual(wordSearchSetUp.setUp()[0].length)
    });
    
    test("word search Set up should define this.board and its return should be equal to the wordSearchSetUp.board", () => {
        expect(wordSearchSetUp.board).toEqual(wordSearchSetUp.setUp())
    })

   test("board's first sub array's length should equal the square root of the letter's array", () => {
       console.log(wordSearchSetUp.board[0].length)
       console.log(Math.sqrt(wordSearchSetUp.lettersArray.length))
        expect(wordSearchSetUp.board[0].length).toEqual(Math.sqrt(wordSearchSetUp.lettersArray.length))
   })

   test("the board first subarray should equal the first part of the letters array", () => {
        const slicedLettersArray = wordSearchSetUp.lettersArray.slice(0, wordSearchSetUp.board[0].length)
        expect(wordSearchSetUp.board[0]).toEqual(slicedLettersArray)
    })

})