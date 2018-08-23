const WordSearch = require('../app/board');

/* TESTS FOR THE CONFIGURATION OF WORDS TO SEARCH FOR */
describe("Word Search should have an array of words to search for", () => {
    let wordSearch;

    beforeEach(() => {
        wordSearch = new WordSearch()
    });

    test("words to search for should be an array", () => {
        expect(Array.isArray(wordSearch.wordsToSearchFor)).toBe(true)
    });

    test("words to search array elements should be strings", () => {
        expect(wordSearch.wordsToSearchFor.every(function(item){ return typeof item === "string" })).toBe(true)
    })
    
})

/* TEST FOR THE CONFIG INPUT OF THE BOARD */
describe("board should have an array of letters that represent the board", () => {
    let wordSearch;

    beforeEach(() => {
        wordSearch = new WordSearch()
    });

    test("boardArray should be an array", () => {
        expect(Array.isArray(wordSearch.boardArray)).toBe(true)
    });

    test("boardArray shoud have a length greater than the longest word squared", () => {
        const longestWord = wordSearch.wordsToSearchFor.sort(function (a, b) { return b.length - a.length; })[0];

        const minLengthOfBoardAsAString = longestWord.length*longestWord.length;

        expect(wordSearch.boardArray.length).toBeGreaterThan(minLengthOfBoardAsAString)
    })

    test("boardArray should be an array of elements that are single letter strings", () => {
        expect(wordSearch.boardArray.every(function(item){
            return typeof item === "string" && item.length === 1
        })).toBe(true)
    })

    test("the square root of the boardArray has a remainder to 0 to represent a square board", () => {
        expect(Math.sqrt(wordSearch.boardArray.length) % 1 === 0).toBe(true)
    })

})

/* TESTS THE SET UP OF THE WORD SEARCH PUZZLE */
describe('Word Search setup building an array that represents a square board', () => {
    let wordSearch;

    beforeEach(() => {
        wordSearch = new WordSearch()
    });

    test('Set up should produce an array', () => {
        expect(Array.isArray(wordSearch.setUp())).toBe(true)
    });

    test('Set up should produce an array of arrays', () => {
        expect(wordSearch.setUp().every(function(row){ 
            return Array.isArray(row)
        })).toBe(true)
    });

    test("Set up array's length should be equal to the length of the sub arrays", () => {
        expect(wordSearch.setUp().length).toEqual(wordSearch.setUp()[0].length)
    });
    
    test("word search Set up should define the this.board and its return should be equal to the wordSearch.board", () => {
        expect(wordSearch.board).toEqual(wordSearch.setUp())
    })
})