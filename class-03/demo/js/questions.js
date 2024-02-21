function guessHowManyPets_Forever() {
  let correct = false;
  let numberOfGuesses = 0;
  while( ! correct ) {
    let guess = prompt("How many pets do I have?");
    guess = Number(guess);
    numberOfGuesses++;
    if( guess === 3 ) { correct = true; }
  }

  document.write(numberOfGuesses);

}

function guessHowManyPets(maxGuesses) {

  let gotItCorrect = false; // this is a "flag"
  let numberOfGuesses = 0;

  for( let i = 1; i<= maxGuesses; i++ ) {
    let guess = prompt("How many pets do I have?");
    guess = Number(guess);
    if( guess === 3 ) {
      gotItCorrect = true;
      numberOfGuesses = i;
      break;
    }
  }

  // Maybe write that they never got it?
  if( gotItCorrect ) {
    document.write(numberOfGuesses);
  } else {
    document.write("Sorry.");
  }
}


// STRETCH GOAL:
// Can you write this so that one function can handle ANY question?

function askQuestionUnlimitedTries( question, correctAnswer) {

}

function askQuestionWithTries( maxGuesses, question, correctAnswer ) {

}

askQuestionUnlimitedTries("What is my favorite pet's name?", "Rocky");
askQuestionWithTries(5, "How many pets do I have?", 3);
askQuestionWithTries(10, "What is my wife's name?", "cathy");
