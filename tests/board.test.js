const Board = require('../app/board');


describe('Board setup building an array that represents a square board', () => {
    test('Set up should produce an array', () => {
        const board = new Board();
        console.log(board.setUp())
        expect(Array.isArray(board.setUp())).toBe(true)
    })
})