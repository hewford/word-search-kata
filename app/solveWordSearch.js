
const WordSearchConfiguration = require('./boardSetUp');

class WordSearchQuery {
    constructor (words) {
        this.solution = {}

        words.forEach((word) => {
            this.solution[word] = '';
        })
    }

}

module.exports = WordSearchQuery;