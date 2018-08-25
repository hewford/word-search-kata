const WordSearchQuery = require('../app/solveWordSearch');
const WordSearchConfiguration = require('../app/boardSetUp');

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
        expect(wordSearchQuery.startSearchQuery(wordSearchConfiguration.wordsToSearchFor[0], wordSearchConfiguration.board)).toEqual(wordSearchQuery.solution[wordSearchConfiguration.wordsToSearchFor[0]])
    })

    test("if a word does not exist, should return 'word not found'", () => {
        expect(
            wordSearchQuery.startSearchQuery('AZ', [['B', 'B', 'B'], ['B', 'B', 'A'], ['B', 'B', 'B']])
        ).toBe("word not found")
    })

    test("calling horizontal search to the RIGHT directly can find the first and second letter of a word", () => {

        wordSearchQuery.foundWord = '(1, 0)'

        wordSearchQuery.searchHorizontallyToRight('AZ', ['A','Z'],  1, 0)

        expect(
            wordSearchQuery.foundWord
        ).toBe('(1, 0), (1, 1)')
    })

    test("horizontal search can find the first letter of a word", () => {
       expect(
           wordSearchQuery.startSearchQuery('A', [['B', 'B', 'B'], ['C', 'C', 'A'], ['D', 'D', 'D']])
       ).toBe('(1, 2)')
    })

    test("horizontal search moving RIGHT can find the first and second letter of a word", () => {
        expect(
            wordSearchQuery.startSearchQuery('AZ', [['B', 'B', 'B'], ['C', 'A', 'Z'], ['D', 'D', 'D']])
        ).toBe('(1, 1), (1, 2)')
     });

     test("horizontal search moving RIGHT should find first, second, and third letters and store the correct coordinates even if it comes across the first letter multiple times", () => {
        expect(
            wordSearchQuery.startSearchQuery('AZB', [['A', 'B', 'B', 'A'], ['A', 'Z', 'B', 'A'], ['D', 'A', 'D', 'D']])
        ).toBe('(1, 0), (1, 1), (1, 2)')
     });

     test("calling horizontal search to the LEFT directly can find the first and second letter of a word", () => {

        wordSearchQuery.foundWord = '(1, 1)'

        wordSearchQuery.searchHorizontallyToLeft('AZ', ['Z','A'],  1, 1)

        expect(
            wordSearchQuery.foundWord
        ).toBe('(1, 1), (1, 0)')
    })

     test("horizontal search moving LEFT can find the first and second letter of a word", () => {
        expect(
            wordSearchQuery.startSearchQuery('AC', [['B', 'B', 'B'], ['C', 'A', 'Z'], ['D', 'D', 'D']])
        ).toBe('(1, 1), (1, 0)')
     });

     test("horizontal search moving LEFT should find first, second, and third letters and store the correct coordinates even if it comes across the first letter multiple times", () => {
        expect(
            wordSearchQuery.startSearchQuery('AAC', [['C', 'B', 'C', 'A'], ['A', 'C', 'A', 'A'], ['D', 'D', 'D', 'D']])
        ).toBe('(1, 3), (1, 2), (1, 1)')
     });

});


describe("solution should find words to find on the board vertically", () => {
    let wordSearchQuery;

    let wordSearchConfiguration;

    beforeEach(() => {
        wordSearchConfiguration = new WordSearchConfiguration()
        wordSearchConfiguration.setUp()

        wordSearchQuery = new WordSearchQuery(wordSearchConfiguration.wordsToSearchFor)
        
    });

    test("vertical search moving UPWARDS can find the first and second letter of a word", () => {

        wordSearchQuery.foundWord = '(1, 0)'

        wordSearchQuery.searchVerticallyUpwards('AZ', [['Z','D'],['A','D']],  1, 0)

        expect(
            wordSearchQuery.foundWord
        ).toBe('(1, 0), (0, 0)')
    })

    test("when searching vertically UPWARDS, array should never check for a sub array of a negative index, as undefined is not an array", () => {
        expect(
            wordSearchQuery.startSearchQuery('AZ', [['A', 'B', 'B'], ['C', 'D', 'A'], ['D', 'D', 'A']])
        ).toBe("word not found")
    })

     test("vertical search moving UPWARDS should find first, second, and third letters and store the correct coordinates even if it comes across the first letter multiple times", () => {
        expect(
            wordSearchQuery.startSearchQuery('AAC', [['A', 'D', 'D', 'C'], ['D', 'D', 'D', 'A'], ['D', 'D', 'D', 'A'], ['D', 'D', 'D', 'A']])
        ).toBe('(2, 3), (1, 3), (0, 3)')
     });

    

    test("vertical search moving DOWNARDS can find the first and second letter of a word", () => {

        wordSearchQuery.foundWord = '(0, 0)'

        wordSearchQuery.searchVerticallyDownwards('AZ', [['A','D'],['Z','D']],  0, 0)

        expect(
            wordSearchQuery.foundWord
        ).toBe('(0, 0), (1, 0)')
    })

   

})
