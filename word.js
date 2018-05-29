// requiring our Letter module exported from letter.js
var Letter = require("./letter.js");

// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

function Word(chosenWord) {

  // An array of new Letter objects representing the letters of the underlying word
  this.newLetters = [];

  // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
  this.wordString.toString = function() {

  };

  // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
  this.guess = function() {
    this.letterGuessed = true;
  };
}

// exporting our Word constructor. We will require it in index.js
module.exports = Word;
