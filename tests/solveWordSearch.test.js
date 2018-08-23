const SolveWordSearch = require('../app/solveWordSearch');
const WordSearchConfiguration = require('../app/boardSetUp');

test("imported word search configuration to class SolveWordSearch", () => {
    const solveWordSearch = new SolveWordSearch()

    const wordSearchConfiguration = new WordSearchConfiguration()

    wordSearchConfiguration.setUp()

    expect(solveWordSearch.wordSearchConfiguration.board).toEqual(wordSearchConfiguration.board)

    expect(solveWordSearch.wordSearchConfiguration.wordsToSearchFor).toEqual(wordSearchConfiguration.wordsToSearchFor)
})

describe("solution should find words to find on the board horizontally", () => {
    let solveWordSearch;

    beforeEach(() => {
        solveWordSearch = new SolveWordSearch()
    });

})