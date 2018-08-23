const Board = require('../app/board');


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

})