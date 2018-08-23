const Board = require('../app/board');

test ("board should have an array of words to search for", () => {
    const board = new Board()
    expect(Array.isArray(board.wordsToSearchFor)).toBe(true)
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
        expect(Array.isArray(board.setUp()[0])).toBe(true)
    });

    test("Set up array's length should be equal to the length of the sub arrays", () => {
        expect(board.setUp().length).toEqual(board.setUp()[0].length)
    });

    
})