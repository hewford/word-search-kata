
const WordSearchConfiguration = require('./boardSetUp');

class WordSearchQuery {
    constructor (words) {
        this.solution = {}

        words.forEach((word) => {
            this.solution[word] = '';
        })
    }

    searchHorizontallyToRight (word, board) {
        let foundWord = '';
        

        this.solution[word] = foundWord;
        return foundWord

    }

}

module.exports = WordSearchQuery;