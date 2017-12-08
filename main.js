const game = require("./game.js");
const wordCons = require("./word.js");
const letterCons = require("./letter.js");
const inquirer = require("inquirer");
const randoWord = game.randoWord;
let letterGuessed;
exports.letter;

let myWord = new wordCons.wordCons(game.randoWord);
let maxGuesses = 15;

function takeAGuess(){
	console.log(myWord.toString());
	if (myWord.guessesMade.length >= maxGuesses){
		console.log('You have no more guesses. WOMP WOMP.');
	return; 
	}
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Enter a letter:',
		validate: function(str){
			let regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
				}
		}]).then(function(letterInput){ 
				let letter = letterInput.letter; 
				myWord.findLetter(letter);
					if(myWord.isComplete()){ 
					console.log('Yes! It was ' + myWord.toString() + '!');
					return; 
					}
				console.log('-------------------\n'); 
				console.log('You have ' + (maxGuesses - myWord.guessesMade.length) + ' guesses left.')
				takeAGuess(); 
				}
  );
}

takeAGuess(); 