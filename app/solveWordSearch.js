
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

            }
        }
    }

    searchHorizontallyToLeft(word, row, rowIndex, letterIndex) {
        for ( let i = 1; i < word.length; i++) {
            let check = row[letterIndex-i]
            if (word[i] === row[letterIndex-i]) {

                this.matchedWordLength++

                this.foundWord = this.foundWord.concat(', ', '('+(rowIndex)+', '+(letterIndex-i)+')')

            }
        }
    }

    searchVerticallyUpwards(word, board, rowIndex, letterIndex) {
        for ( let i = 1; i < word.length; i++) {
            // check for a negative value so that code doesn't look for a negative index in an array.
            if(rowIndex-i < 0) {
                break;
            }

            // if next letter is found, store the coordinate
            if (word[i] === board[rowIndex-i][letterIndex]) {

                this.matchedWordLength++

                this.foundWord = this.foundWord.concat(', ', '('+(rowIndex-i)+', '+(letterIndex)+')')

            }
        }
    }

    searchVerticallyDownwards(word, board, rowIndex, letterIndex) {
        for ( let i = 1; i < word.length; i++) {
            // check for a negative value so that code doesn't look for a negative index in an array.
            if(board[rowIndex+i] === undefined) {
                break;
            }

            // if next letter is found, store the coordinate
            if (word[i] === board[rowIndex+i][letterIndex]) {

                this.matchedWordLength++

                this.foundWord = this.foundWord.concat(', ', '('+(rowIndex+i)+', '+(letterIndex)+')')

            }
        }
    }

    searchDiagonallyDownAndRight (word, board, rowIndex, letterIndex) {
        for ( let i = 1; i < word.length; i++) {
            // check for a negative value so that code doesn't look for a negative index in an array.
            if(board[rowIndex+i] === undefined) {
                break;
            }

            // if next letter is found, store the coordinate
            if (word[i] === board[rowIndex+i][letterIndex+i]) {

                this.matchedWordLength++

                this.foundWord = this.foundWord.concat(', ', '('+(rowIndex+i)+', '+(letterIndex+i)+')')

            } 
        }
    };

    searchDiagonallyDownAndLeft(word, board, rowIndex, letterIndex) {
        for ( let i = 1; i < word.length; i++) {
            // check for a negative value so that code doesn't look for a negative index in an array.
            if(board[rowIndex+i] === undefined) {
                break;
            }

            // if next letter is found, store the coordinate
            if (word[i] === board[rowIndex+i][letterIndex-i]) {

                this.matchedWordLength++

                this.foundWord = this.foundWord.concat(', ', '('+(rowIndex+i)+', '+(letterIndex-i)+')')

            } 
        }
    };

    searchDiagonallyUpAndRight(word, board, rowIndex, letterIndex) {
        for ( let i = 1; i < word.length; i++) {
            // check for a negative value so that code doesn't look for a negative index in an array.
            if(board[rowIndex-i] === undefined) {
                break;
            }

            // if next letter is found, store the coordinate
            if (word[i] === board[rowIndex-i][letterIndex+i]) {

                this.matchedWordLength++

                this.foundWord = this.foundWord.concat(', ', '('+(rowIndex-i)+', '+(letterIndex+i)+')')

            } 
        }
    };

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

                    this.foundWord = '('+rowIndex+', '+letterIndex+')'
                    this.matchedWordLength = 1

                    /* === SEARCH RIGHT ===*/
                    this.searchHorizontallyToRight(word, row, rowIndex, letterIndex);

                    /* === SEARCH LEFT ===*/
                    if (this.matchedWordLength === word.length) {
                        return this.foundWord;
                    } else {
                        this.foundWord = '('+rowIndex+', '+letterIndex+')'
                        this.matchedWordLength = 1

                        this.searchHorizontallyToLeft(word, row, rowIndex, letterIndex);
                    }

                    /* === SEARCH UP ===*/
                    if (this.matchedWordLength === word.length) {
                        return this.foundWord;
                    } else {
                        this.foundWord = '('+rowIndex+', '+letterIndex+')'
                        this.matchedWordLength = 1

                        this.searchVerticallyUpwards(word, board, rowIndex, letterIndex);
                    }

                    /* === SEARCH DOWN ===*/
                    if (this.matchedWordLength === word.length) {
                        return this.foundWord;
                    } else {
                        this.foundWord = '('+rowIndex+', '+letterIndex+')'
                        this.matchedWordLength = 1

                        this.searchVerticallyDownwards(word, board, rowIndex, letterIndex);
                    }

                    /* === SEARCH DOWN & RIGHT ===*/
                    if (this.matchedWordLength === word.length) {
                        return this.foundWord;
                    } else {
                        this.foundWord = '('+rowIndex+', '+letterIndex+')'
                        this.matchedWordLength = 1

                        this.searchDiagonallyDownAndRight(word, board, rowIndex, letterIndex);
                    }

                    /* === SEARCH DOWN & LEFT ===*/
                    if (this.matchedWordLength === word.length) {
                        return this.foundWord;
                    } else {
                        this.foundWord = '('+rowIndex+', '+letterIndex+')'
                        this.matchedWordLength = 1

                        this.searchDiagonallyDownAndLeft(word, board, rowIndex, letterIndex);
                    }

                    /* === SEARCH UP & RIGHT ===*/
                    if (this.matchedWordLength === word.length) {
                        return this.foundWord;
                    } else {
                        this.foundWord = '('+rowIndex+', '+letterIndex+')'
                        this.matchedWordLength = 1

                        this.searchDiagonallyUpAndRight(word, board, rowIndex, letterIndex);
                    }
                }
            })
        })

        if (this.matchedWordLength !== word.length) {
            this.foundWord = "word not found"
        }

        this.solution[word] = this.foundWord;
        
        return this.foundWord
        
    }

}


module.exports = WordSearchQuery;