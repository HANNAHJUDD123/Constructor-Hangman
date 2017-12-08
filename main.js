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
	return; //Game over
	}
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Enter a letter:',
		validate: function(str){
//			if (str.length != 1) return false;
			let regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
				}
		}]).then(function(letterInput){ //Game control
				let letter = letterInput.letter; 
				myWord.findLetter(letter); //Check
					if(myWord.isComplete()){ 
					console.log('Yes! It was ' + myWord.toString() + '!');
					return; //Winner
					}
				console.log('-------------------\n'); //If we are here the game did not end. Next guess.
				console.log('You have ' + (maxGuesses - myWord.guessesMade.length) + ' guesses left.')
				takeAGuess(); //Recursive call
				}
  );
}

takeAGuess(); //Start Game