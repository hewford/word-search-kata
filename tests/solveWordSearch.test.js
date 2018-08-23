const WordSearchQuery = require('../app/solveWordSearch');
const WordSearchConfiguration = require('../app/boardSetUp');

// test("word search configuration should be imported to class WordSearchQuery", () => {
//     const solveWordSearch = new WordSearchQuery()

//     const wordSearchConfiguration = new WordSearchConfiguration()

//     wordSearchConfiguration.setUp()

//     expect(solveWordSearch.wordSearchConfiguration.board).toEqual(wordSearchConfiguration.board)

//     expect(solveWordSearch.wordSearchConfiguration.wordsToSearchFor).toEqual(wordSearchConfiguration.wordsToSearchFor)
// })

describe("the word search query has a detailed object whose properties are named after the words being searched", () => {
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

    test("word search query's this.solution's keys are named by the words that are being searched", () => {

        expect(wordSearchConfiguration.wordsToSearchFor.every(function(word){
            return wordSearchQuery.solution.hasOwnProperty(word)
        })).toBe(true)
    })
})


describe("solution should find words to find on the board horizontally", () => {
    let wordSearchQuery;

    let wordSearchConfiguration;

    beforeEach(() => {
        wordSearchConfiguration = new WordSearchConfiguration()
        wordSearchConfiguration.setUp()

        wordSearchQuery = new WordSearchQuery(wordSearchConfiguration.wordsToSearchFor)
        
    });

    test("horizontal search returns a string that equals this.solution's property asociated with queried word", () => {
        expect(wordSearchQuery.searchHorizontallyToRight(wordSearchConfiguration.wordsToSearchFor[0])).toEqual(wordSearchQuery.solution[wordSearchConfiguration.wordsToSearchFor[0]])
    })

    

})