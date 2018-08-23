
const WordSearchConfiguration = require('./boardSetUp');

class SolveWordSearch {
    constructor (words) {
        console.log(words)
    }

    searchHorizontally (word, board) {
        for (let i = 0; i < word.length; i++) {
            board.forEach((row, rowIndex) => {
                row.forEach((letter, letterIndex) => {
                    if(word[0] === letter) {
                        rowIndex, letterIndex
                    }
                })
            })
        }

    }
}

// const solveWordSearch = new SolveWordSearch()
// solveWordSearch.searchHorizontally('ARPADELO', solveWordSearch.board)



module.exports = SolveWordSearch;