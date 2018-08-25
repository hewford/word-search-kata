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
            wordSearchQuery.startSearchQuery('AZ', [
                ['B', 'B', 'B'], 
                ['B', 'B', 'A'], 
                ['B', 'B', 'B']])
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
           wordSearchQuery.startSearchQuery('A', [
               ['B', 'B', 'B'], 
               ['C', 'C', 'A'], 
               ['D', 'D', 'D']])
       ).toBe('(1, 2)')
    })

    test("horizontal search moving RIGHT can find the first and second letter of a word", () => {
        expect(
            wordSearchQuery.startSearchQuery('AZ', [
                ['B', 'B', 'B'], 
                ['C', 'A', 'Z'], 
                ['D', 'D', 'D']])
        ).toBe('(1, 1), (1, 2)')
     });

     test("horizontal search moving RIGHT should find first, second, and third letters and store the correct coordinates even if it comes across the first letter multiple times", () => {
        expect(
            wordSearchQuery.startSearchQuery('AZB', [
                ['A', 'B', 'B', 'A'], 
                ['A', 'Z', 'B', 'A'], 
                ['D', 'A', 'D', 'D']])
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
            wordSearchQuery.startSearchQuery('AC', [
                ['B', 'B', 'B'], 
                ['C', 'A', 'Z'], 
                ['D', 'D', 'D']])
        ).toBe('(1, 1), (1, 0)')
     });

     test("horizontal search moving LEFT should find first, second, and third letters and store the correct coordinates even if it comes across the first letter multiple times", () => {
        expect(
            wordSearchQuery.startSearchQuery('AAC', [
                ['C', 'B', 'C', 'A'], 
                ['A', 'C', 'A', 'A'], 
                ['D', 'D', 'D', 'D']])
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

        wordSearchQuery.searchVerticallyUpwards('AZ', [
            ['Z','D'],
            ['A','D']],  1, 0)

        expect(
            wordSearchQuery.foundWord
        ).toBe('(1, 0), (0, 0)')
    })

    test("when searching vertically UPWARDS, array should never check for a sub array of a negative index, as undefined is not an array", () => {
        expect(
            wordSearchQuery.startSearchQuery('AZ', [
                ['A', 'B', 'B'], 
                ['C', 'D', 'A'], 
                ['D', 'D', 'A']])
        ).toBe("word not found")
    })

    test("vertical search moving UPWARDS should find first, second, and third letters and store the correct coordinates even if it comes across the first letter multiple times", () => {
        expect(
            wordSearchQuery.startSearchQuery('AAC', [
                ['A', 'D', 'D', 'C'], 
                ['D', 'D', 'D', 'A'], 
                ['D', 'D', 'D', 'A'], 
                ['D', 'D', 'D', 'A']])
        ).toBe('(2, 3), (1, 3), (0, 3)')
    });

    test("vertical search moving DOWNARDS can find the first and second letter of a word when downward search is called directly", () => {
        wordSearchQuery.foundWord = '(0, 0)'

        wordSearchQuery.searchVerticallyDownwards('AZ', [
            ['A','D'],
            ['Z','D']],  0, 0)

        expect(
            wordSearchQuery.foundWord
        ).toBe('(0, 0), (1, 0)')
    });

    test("vertical search moving DOWNARDS can find the first and second letter of a word", () => {
        expect(
            wordSearchQuery.startSearchQuery('AZ', [
                ['A', 'D', 'D', 'C'], 
                ['Z', 'D', 'D', 'D']])
        ).toBe('(0, 0), (1, 0)')
    });

    test("when searching vertically DOWNWARDS, array should never check for a sub array of an index that is undefined, as undefined is not an array", () => {
        expect(
            wordSearchQuery.startSearchQuery('AZ', [
                ['B', 'B', 'B'], 
                ['C', 'D', 'B'], 
                ['D', 'D', 'A']])
        ).toBe("word not found")
    });

    test("vertical search moving DOWNWARDS should find first, second, and third letters and store the correct coordinates even if it comes across the first letter multiple times", () => {
        expect(
            wordSearchQuery.startSearchQuery('AAC', [
                ['A', 'D', 'D', 'D'], 
                ['A', 'D', 'D', 'A'], 
                ['A', 'D', 'D', 'A'], 
                ['C', 'D', 'D', 'A']])
        ).toBe('(1, 0), (2, 0), (3, 0)')
     });

});

describe("solution should find words to find on the board DIAGONALLY DOWN AND RIGHT", () => {
    let wordSearchQuery;

    let wordSearchConfiguration;

    beforeEach(() => {
        wordSearchConfiguration = new WordSearchConfiguration()
        wordSearchConfiguration.setUp()

        wordSearchQuery = new WordSearchQuery(wordSearchConfiguration.wordsToSearchFor)
        
    });

    test("diagonal DOWN RIGHT search should find the first and second letter of a word when downward search is called directly", () => {
        wordSearchQuery.foundWord = '(0, 0)'

        wordSearchQuery.searchDiagonallyDownAndRight('AZ', [
            ['A','D'],
            ['D','Z']],  0, 0)

        expect(
            wordSearchQuery.foundWord
        ).toBe('(0, 0), (1, 1)')
    });

    test("diagonal DOWN RIGHT search should not check for a letter in a row that does not exist", () => {
        wordSearchQuery.foundWord = 'testing non-existant rows'

        wordSearchQuery.searchDiagonallyDownAndRight('AZ', [
            ['D','D'],
            ['A','Z']],  1, 0)

        expect(
            wordSearchQuery.foundWord
        ).toBe('testing non-existant rows')
    });

    test("diagonal DOWN RIGHT search should find the first and second letter of a word when startSearchQuery is called", () => {
        
        expect(
            wordSearchQuery.startSearchQuery('AZ', [
                ['A', 'D', 'D', 'D'], 
                ['D', 'Z', 'D', 'D']])
        ).toBe('(0, 0), (1, 1)')
    });

    test("diagonal DOWN RIGHT search should find first, second, and third letters and store the correct coordinates even if it comes across the first letter multiple times", () => {
        
        expect(
            wordSearchQuery.startSearchQuery('XYZ', [
                ['A', 'D', 'D', 'D'], 
                ['D', 'X', 'D', 'D'], 
                ['D', 'Z', 'Y', 'D'], 
                ['D', 'Z', 'D', 'Z']])
        ).toBe('(1, 1), (2, 2), (3, 3)')
    });
});

describe("solution should find words to find on the board DIAGONALLY DOWN AND LEFT", () => {
    let wordSearchQuery;

    let wordSearchConfiguration;

    beforeEach(() => {
        wordSearchConfiguration = new WordSearchConfiguration()
        wordSearchConfiguration.setUp()

        wordSearchQuery = new WordSearchQuery(wordSearchConfiguration.wordsToSearchFor)
        
    });

    test("diagonal DOWN LEFT search should find the first and second letter of a word when downward search is called directly", () => {
        wordSearchQuery.foundWord = '(0, 1)'

        wordSearchQuery.searchDiagonallyDownAndLeft('AZ', [
            ['D','A'],
            ['Z','D']],  0, 1)

        expect(
            wordSearchQuery.foundWord
        ).toBe('(0, 1), (1, 0)')
    });

    test("diagonal DOWN LEFT search should not check for a letter in a row that does not exist", () => {
        wordSearchQuery.foundWord = 'testing non-existant rows'

        wordSearchQuery.searchDiagonallyDownAndLeft('AZ', [
            ['D','D'],
            ['A','Z']],  1, 0)

        expect(
            wordSearchQuery.foundWord
        ).toBe('testing non-existant rows')
    });

    test("diagonal DOWN LEFT search should find the first and second letter of a word when startSearchQuery is called", () => {
          
        expect(
            wordSearchQuery.startSearchQuery('AZ', [
                ['D', 'D', 'A', 'D'], 
                ['D', 'Z', 'D', 'D']])
        ).toBe('(0, 2), (1, 1)')
    });

    test("diagonal DOWN LEFT search should find first, second, and third letters and store the correct coordinates even if it comes across the first letter multiple times", () => {
          
        expect(
            wordSearchQuery.startSearchQuery('XYZ', [
                ['A', 'D', 'D', 'D'], 
                ['D', 'D', 'D', 'X'], 
                ['D', 'Z', 'Y', 'D'], 
                ['D', 'Z', 'D', 'Z']])
        ).toBe('(1, 3), (2, 2), (3, 1)')
    }); 
});

describe("solution should find words to find on the board DIAGONALLY UP AND RIGHT", () => {
    let wordSearchQuery;

    let wordSearchConfiguration;

    beforeEach(() => {
        wordSearchConfiguration = new WordSearchConfiguration()
        wordSearchConfiguration.setUp()

        wordSearchQuery = new WordSearchQuery(wordSearchConfiguration.wordsToSearchFor)
        
    });

    test("diagonal UP AND RIGHT search should find the first and second letter of a word when downward search is called directly", () => {
        wordSearchQuery.foundWord = '(1, 0)'

        wordSearchQuery.searchDiagonallyUpAndRight('AZ', [
            ['D','Z'],
            ['A','D']],  1, 0)

        expect(
            wordSearchQuery.foundWord
        ).toBe('(1, 0), (0, 1)')
    });

    test("diagonal UP and RIGHT search should not check for a letter in a row that does not exist", () => {
        wordSearchQuery.foundWord = 'testing non-existant rows'

        wordSearchQuery.searchDiagonallyUpAndRight('AZ', [
            ['A','Z'],
            ['D','D']],  0, 0)

        expect(
            wordSearchQuery.foundWord
        ).toBe('testing non-existant rows')
    });

    test("diagonal UP and RIGHT search should find the first and second letter of a word when startSearchQuery is called", () => {
            
        expect(
            wordSearchQuery.startSearchQuery('AZ', [
                ['D', 'D', 'Z', 'D'], 
                ['D', 'A', 'D', 'D']])
        ).toBe('(1, 1), (0, 2)')
    });

    test("diagonal UP and RIGHT search should find first, second, and third letters and store the correct coordinates even if it comes across the first letter multiple times", () => {
            
        expect(
            wordSearchQuery.startSearchQuery('XYZ', [
                ['A', 'D', 'D', 'D'], 
                ['D', 'D', 'D', 'Z'], 
                ['D', 'Z', 'Y', 'D'], 
                ['D', 'X', 'D', 'Z']])
        ).toBe('(3, 1), (2, 2), (1, 3)')
    }); 
});

describe("solution should find words to find on the board DIAGONALLY UP AND RIGHT", () => {
    let wordSearchQuery;

    let wordSearchConfiguration;

    beforeEach(() => {
        wordSearchConfiguration = new WordSearchConfiguration()
        wordSearchConfiguration.setUp()

        wordSearchQuery = new WordSearchQuery(wordSearchConfiguration.wordsToSearchFor)
        
    });

    test("diagonal UP and LEFT search should find the first and second letter of a word when downward search is called directly", () => {
        wordSearchQuery.foundWord = '(1, 1)'

        wordSearchQuery.searchDiagonallyUpAndLeft('AZ', [
            ['Z','D'],
            ['D','A']],  1, 1)

        expect(
            wordSearchQuery.foundWord
        ).toBe('(1, 1), (0, 0)')
    });

    test("diagonal UP and LEFT search should not check for a letter in a row that does not exist", () => {
        wordSearchQuery.foundWord = 'testing non-existant rows'
    
        wordSearchQuery.searchDiagonallyUpAndLeft('AZ', [
            ['A','D'],
            ['D','D']],  0, 0)
    
        expect(
            wordSearchQuery.foundWord
        ).toBe('testing non-existant rows')
    });

    
});