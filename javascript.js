var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var wins = 0;
var losses = 0;
var guessesLeft = 8;
var previousGuess = [];

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var previousGuessText = document.getElementById("previousguess-text");

document.onkeyup = function (event) {
console.log(previousGuess);
    var userGuess = event.key;
    directionsText.textContent = "";
    userChoiceText.textContent = "You chose:" + " " + userGuess;
    computerChoiceText.textContent = "The computer chose:" + " " + computerGuess;
    winsText.textContent = "Wins:" + " " + wins;
    lossesText.textContent = "Losses:" + " " + losses;
    previousGuessText.textContent = "Previous guesses:" + previousGuess;
    guessesLeftText.textContent = "Guesses left:" + guessesLeft;

    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 8;
        previousGuess = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess);
    } 
    
    else if (userGuess != computerGuess) {
        guessesLeft--;
        console.log(guessesLeft);
        previousGuess.push(userGuess);
        console.log(previousGuess);
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        
        if (guessesLeft === 0) {
            losses++;
            guessesLeft = 8;
            previousGuess = [];
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            console.log(computerGuess);
        };
    };
};
