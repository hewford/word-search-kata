const Board = require('../app/board');


describe("board should have an array of words to search for", () => {
    let board;

    beforeEach(() => {
        board = new Board()
    });

    test("words to search for should be an array", () => {
        expect(Array.isArray(board.wordsToSearchFor)).toBe(true)
    });

    test("words to search array elements should be strings", () => {
        expect(board.wordsToSearchFor.every(function(item){ return typeof item === "string" })).toBe(true)
    })
    
})



describe('Board setup building an array that represents a square board', () => {
    let board;

    beforeEach(() => {
        board = new Board()
    });

    test('Set up should produce an array', () => {
        expect(Array.isArray(board.setUp())).toBe(true)
    });

    test('Set up should produce an array of arrays', () => {
        expect(board.setUp().every(function(row){ 
            return Array.isArray(row)
        })).toBe(true)
    });

    test("Set up array's length should be equal to the length of the sub arrays", () => {
        expect(board.setUp().length).toEqual(board.setUp()[0].length)
    });

    
})