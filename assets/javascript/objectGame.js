
// some vars
// var html = "<p>Press any key to get started!</p>" +
//            "<p>Wins " + game.wins + "</p>" +
//            "<p>Current Word</p>" +
//            "<p>" + game.emptyWord + "</p>" +
//            "<p>Number of guesses remaining:</p>" +
//            "<p>" + game.guessRemain + "</p>" +
//            "<p>Letters already guessed:</p>" +
//            "<p>" + game.guesses + "</p>";
var html = "<p>Press any key to begin!</p>";
var userGuess = "";
var index = 0;
//game object 
var game = {
    wins: 0,
    emptyWord: [],
    guessRemain: 15,
    guesses: [],
    choices: ["HARRY", "WEASLEY", "HERMIONE", "DUMBLEDORE", "VOLDEMORT",
    "HAGRID", "MCGONAGALL", "WOOD", "SNAPE", "SEVERUS", "DRACO", "MALFOY",
    "LUCIUS", "NARCISSA", "FIRENZE", "RIDDLE", "MARVOLO", "FLITWICK", "ARAGOG",
    "NORBERT", "CEDRIC", "NEVILLE", "LONGBOTTOM", "DUDLEY", "VERNON", "PETUNIA",
    "JAMES", "SIRIUS", "LUPIN", "LILY", "ALBUS", "ARTHUR", "FRED", "GEORGE",
    "MOLLY", "BELLATRIX", "DOBBY", "KREACHER", "BUCKBEAK", "HEDWIG", "WORMTAIL",
    "GRYFFINDOR", "SLYTHERIN", "RAVENCLAW", "HUFFLEPUFF", "MOODY", "SPROUT",
    "FILCH", "CHO", "GOYLE", "CRABBE", "POTTER"],
    photos: ["harry-potter.jpg", "weasleyPic.jpg", "hermione.jpg", "dumbledor1.jpg", "vol4.jpg"],
    songs: [],
    compChoice: "",
    pickWord: function() {
        index = Math.floor(Math.random() * 5);//game.choices.length);
        game.compChoice = game.choices[index];
    },
    blanks: function() {
        for (var i = 0; i < game.compChoice.length; i++) {
            game.emptyWord.push("_ ");
        }
    },
    reset: function() {
        game.guessRemain = 15;
        game.guesses = [];
        game.emptyWord = [];
        game.pickWord();
        game.blanks();
        document.getElementById("game").innerHTML = html;
    },
    compare: function(userLetter) {
        if (game.compChoice.indexOf(userLetter) === -1) {
            return false;
        }
        else {return true;}
    },
    letterReplace: function() {
        var compChoiceArray = game.compChoice.split("");
        compChoiceArray.forEach(function(item, i) { if (item === userGuess) game.emptyWord[i] = userGuess; });
        game.guessRemain--;
    }

}

game.reset();

document.onkeyup = function (event) {

    // declare the first letter choice and make uppercase 
    userGuess = event.key.toUpperCase();

    // see if the user guess is in the word the computer chose
    // if false then add the use guess to the guesses array
    console.log(game.emptyWord);
    console.log(userGuess);
    console.log(game.compChoice);
    console.log(game.compare(userGuess));
    if (game.compare(userGuess) && game.emptyWord.indexOf(userGuess) === -1 && game.guesses.indexOf(userGuess) === -1) {
        game.letterReplace();
    }
    else if (!game.compare(userGuess) && game.emptyWord.indexOf(userGuess) === -1 && game.guesses.indexOf(userGuess) === -1) {
        game.guesses.push(userGuess);
        game.guessRemain--;
    }

    if (game.guessRemain === 0 || game.emptyWord.indexOf("_ ") === -1) {
        document.getElementById("image").src = "assets/image/" + game.photos[index];
        game.reset();
    }

    html = "<p>Press any key to get started!</p>" +
           "<p>Wins " + game.wins + "</p>" +
           "<p>Current Word</p>" +
           "<p>" + game.emptyWord.join(" ") + "</p>" +
           "<p>Number of guesses remaining:</p>" +
           "<p>" + game.guessRemain + "</p>" +
           "<p>Letters already guessed:</p>" +
           "<p>" + game.guesses + "</p>";
    document.getElementById("game").innerHTML = html;


}