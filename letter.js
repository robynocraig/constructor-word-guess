
// This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.  That means the constructor should define:

function Letter(character, letterGuessed, letterState, guessedCorrectly) {

  // A string value to store the underlying character for the letter
  this.character = character;

  // A boolean value that stores whether that letter has been guessed yet
  this.letterGuessed = letterGuessed;

  // A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
  this.letterState = function() {

    if (letterGuessed === false) {
      console.log(character);
    }

    else {
      console.log("_");
    }
  };

  // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
  this.guessedCorrectly = function() {
    this.letterGuessed = true;
  };
}

//var test = new Letter("d", true);

//test.letterState();
