
const WordSearchConfiguration = require('./boardSetUp');

class WordSearchQuery {
    constructor (words) {
        // initialize the object that will contain the solution
        this.solution = {}

        words.forEach((word) => {
            this.solution[word] = '';
        })

        this.foundWord = '';

        this.matchedWordLength = 0;
    }

    searchHorizontallyToRight(word, row, rowIndex, letterIndex) {
        for ( let i = 1; i < word.length; i++) {
            if (word[i] === row[letterIndex+i]) {

                this.matchedWordLength++

                this.foundWord = this.foundWord.concat(', ', '('+(rowIndex)+', '+(letterIndex+i)+')')

            } else {
                this.matchedWordLength = 1
            }
        }
    }

    searchHorizontallyToLeft(word, row, rowIndex, letterIndex) {
        for ( let i = 1; i < word.length; i++) {
            if (word[i] === row[letterIndex-i]) {

                this.matchedWordLength++

                this.foundWord = this.foundWord.concat(', ', '('+(rowIndex)+', '+(letterIndex-i)+')')

            } else {
                this.matchedWordLength = 1
            }
        }
    }

    startSearchQuery (word, board) {

        this.foundWord = '';

         // search each letter in each row
         board.some((row, rowIndex) => {
            if (this.matchedWordLength === word.length) {
                return this.foundWord;
            }

            row.some((letter, letterIndex) => {
                if (this.matchedWordLength === word.length) {
                    return this.foundWord;

                } else if (word[0] === letter) {
                    // initialize length of possible match
                    this.matchedWordLength = 1

                    this.foundWord = '('+rowIndex+', '+letterIndex+')'

                    this.searchHorizontallyToRight(word, row, rowIndex, letterIndex);

                    if (this.matchedWordLength === word.length) {
                        return this.foundWord;
                    } else {
                        this.searchHorizontallyToLeft(word, row, rowIndex, letterIndex);
                    }
                }
            })
        })

        this.solution[word] = this.foundWord;

        return this.foundWord
        
    }

}




module.exports = WordSearchQuery;