//Check the letters guessed versus the random word selected
const letterCons = require("./letter.js");

function word(value){
	this.value = value;
	this.letters = [];
	this.guessesMade = "";
	for(let i = 0; i < this.value.length; i++) {
		this.letters.push(new letterCons.letter(this.value[i]));
	}
};

word.prototype.isComplete = function(){
	for(let i = 0; i < this.letters.length; i++){
		if(!this.letters[i].show) return false;
	}
	return true;
}

word.prototype.findLetter = function(letter){
	let lowerLetter = letter.toLowerCase();
	if (this.guessesMade.indexOf(lowerLetter) != -1) {
		return "Duplicate";
	} 
	this.guessesMade += lowerLetter; 
	for(let i=0; i<this.letters.length;i++){
		if(this.letters[i].value.toLowerCase() == lowerLetter){
		this.letters[i].show = true;
		}
	}
};

word.prototype.toString = function(){
  let output = "";
  for(let i=0; i<this.letters.length; i++){
    output += this.letters[i].printInfo();
  }
  return output;
}

exports.wordCons = word;