const WordSearchQuery = require('../app/solveWordSearch');
const WordSearchConfiguration = require('../app/boardSetUp');

// test("word search configuration should be imported to class WordSearchQuery", () => {
//     const solveWordSearch = new WordSearchQuery()

//     const wordSearchConfiguration = new WordSearchConfiguration()

//     wordSearchConfiguration.setUp()

//     expect(solveWordSearch.wordSearchConfiguration.board).toEqual(wordSearchConfiguration.board)

//     expect(solveWordSearch.wordSearchConfiguration.wordsToSearchFor).toEqual(wordSearchConfiguration.wordsToSearchFor)
// })

describe("solution should find words to find on the board horizontally", () => {
    let wordSearchQuery;

    let wordSearchConfiguration;

    beforeEach(() => {
        wordSearchConfiguration = new WordSearchConfiguration()
        wordSearchConfiguration.setUp()
        wordSearchQuery = new WordSearchQuery(wordSearchConfiguration.wordsToSearchFor)
        
    });

    test("the word search query this.solution should be an object", () => {
        expect(typeof wordSearchQuery.solution).toBe('object')
    })

})