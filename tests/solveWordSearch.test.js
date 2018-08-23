const SolveWordSearch = require('../app/solveWordSearch');
const WordSearchConfiguration = require('../app/boardSetUp');

// test("word search configuration should be imported to class SolveWordSearch", () => {
//     const solveWordSearch = new SolveWordSearch()

//     const wordSearchConfiguration = new WordSearchConfiguration()

//     wordSearchConfiguration.setUp()

//     expect(solveWordSearch.wordSearchConfiguration.board).toEqual(wordSearchConfiguration.board)

//     expect(solveWordSearch.wordSearchConfiguration.wordsToSearchFor).toEqual(wordSearchConfiguration.wordsToSearchFor)
// })

describe("solution should find words to find on the board horizontally", () => {
    let solveWordSearch;

    let wordSearchConfiguration;

    beforeEach(() => {
        wordSearchConfiguration = new WordSearchConfiguration()
        wordSearchConfiguration.setUp()
        solveWordSearch = new SolveWordSearch(wordSearchConfiguration.wordsToSearchFor)
        
    });

    test("", () => {

    })

})