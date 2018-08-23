
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
        let matchedWordLength = 0
        
        // search each letter in each row
        board.some((row, rowIndex) => {

            if (matchedWordLength === word.length) {
                return foundWord;
            }

            row.some((letter, letterIndex) => {

                if (matchedWordLength === word.length) {
                    return foundWord;

                } else if (word[0] === letter) {
                    // initialize length of possible match
                    matchedWordLength = 1

                    foundWord = '('+rowIndex+', '+letterIndex+')'

                    for ( let i = 1; i < word.length; i++) {
                        if (word[i] === row[letterIndex+i]){

                            matchedWordLength++

                            foundWord = foundWord.concat(', ', '('+(rowIndex)+', '+(letterIndex+i)+')')

                        } else {
                            matchedWordLength = 1
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