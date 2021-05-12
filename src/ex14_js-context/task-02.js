function Hangman(word) {
    this.word = word;

    let answerArray = [];
    let errorsLeft = 6;
    let wrongLetters = new Set();
    let flag = false;

    this.guess = function(letter) {
        let isLetterGuessed = false;
        let sign = letter.toLowerCase();

        if (!flag) {
            for (var i = 0; i < this.word.length; i++) {
                answerArray[i] = '_';
            };
            flag = true;
        }

        if (sign === null || sign.length !== 1) {
            console.log('enter 1 letter');
            return this;
        }

        for (var j = 0; j < this.word.length; j++) {

            if (this.word[j] === sign) {
                answerArray[j] = sign;
                isLetterGuessed = true;

                if (answerArray.join('') === this.word) {
                    console.log(`${answerArray.join('')} | you won!`);
                    flag = false;
                    return this;
                } 
            }
        }

        if (!isLetterGuessed) {
            errorsLeft -= 1;

            wrongLetters.add(letter);
            
            console.log(`wrong letter, errors left ${errorsLeft} | ${Array.from(wrongLetters).join()}`);

            if (errorsLeft < 1) {
                console.log('You have no attempts left');
                flag = false;
            }
        }
        else {
            console.log(answerArray.join(''));
        }

        return this;
    }

    this.getGuessedString = function() {
        console.log(answerArray.join(''));
        return answerArray.join('');  
    };

    this.getErrorsLeft = function() {
        console.log(errorsLeft);
        return errorsLeft;
    };

    this.getWrongSymbols = function() {
        let wrongSymbols = Array.from(wrongLetters)
        console.log(wrongSymbols);
        return wrongSymbols;
    };

    this.getStatus = function() {
        console.log(`${answerArray.join('')} | errors left ${errorsLeft}`);
        return this;
    };

    this.startAgain = function(newWord) {
        flag = false;
        this.word = newWord;
        errorsLeft = 6;

        for (var i = 0; i < newWord.length; i++) {
            answerArray[i] = '_';
        };

        return this;
    };
}

let hangman = new Hangman('webpurple');

module.exports = hangman;
