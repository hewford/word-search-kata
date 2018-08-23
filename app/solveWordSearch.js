
const WordSearchConfiguration = require('./boardSetUp');

class WordSearchQuery {
    constructor (words) {
        // initialize the object that will contain the solution
        this.solution = {}

        words.forEach((word) => {
            this.solution[word] = '';
        })
    }

    searchHorizontallyToRight (word, board) {
        // initialize placeholder for possible match
        let foundWord = '';
        
        // search each letter in each row
        board.forEach((row, rowIndex) => {
            row.forEach((letter, letterIndex) => {
                if (word[0] === letter) {
                    foundWord = '('+rowIndex+', '+letterIndex+')'
                    for ( let i = 1; i < word.length; i++) {
                        if (word[i] === row[letterIndex+i]){
                            foundWord = foundWord.concat(', ', '('+(rowIndex)+', '+(letterIndex+i)+')')

                        }
                    }
                    

                }
            })
        })

        this.solution[word] = foundWord;
        return foundWord

    }

}



module.exports = WordSearchQuery;