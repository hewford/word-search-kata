const WordSearch = require('../app/board');


describe("board should have an array of words to search for", () => {
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

describe("board should have an array of letters that represent the board", () => {
   
})


describe('Board setup building an array that represents a square board', () => {
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

    
})