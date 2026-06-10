const favMovie = "12th Fail";

let guess = prompt("Guess the movie name");

// Notice the quotes around "quit" now
while((guess !== favMovie) && (guess !== "quit")){
    guess = prompt("Wrong guess, please try again (or type 'quit' to exit):");
}

// Optional: Add a nice closing message
if (guess === favMovie) {
    console.log("Congrats! You guessed it right.");
} else {
    console.log("You quit the game.");
}