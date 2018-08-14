// vars
var wins = 0;
var guesses = [];
var currentGuess = "a";
var emptyArray = [];
var guessRemain = 0;
var wordOptions = ["HARRY", "WEASLEY", "HERMIONE", "DUMBLEDORE", "VOLDEMORT",
    "HAGRID", "MCGONAGALL", "WOOD", "SNAPE", "SEVERUS", "DRACO", "MALFOY",
    "LUCIUS", "NARCISSA", "FIRENZE", "RIDDLE", "MARVOLO", "FLITWICK", "ARAGOG",
    "NORBERT", "CEDRIC", "NEVILLE", "LONGBOTTOM", "DUDLEY", "VERNON", "PETUNIA",
    "JAMES", "SIRIUS", "LUPIN", "LILY", "ALBUS", "ARTHUR", "FRED", "GEORGE",
    "MOLLY", "BELLATRIX", "DOBBY", "KREACHER", "BUCKBEAK", "HEDWIG", "WORMTAIL",
    "GRYFFINDOR", "SLYTHERIN", "RAVENCLAW", "HUFFLEPUFF", "MOODY", "SPROUT",
    "FILCH", "CHO", "GOYLE", "CRABBE", "POTTER"
];
var computerChoice = "nothing";
console.log(computerChoice);

function reset() {
    guesses = [];
    guessRemain = 15;
    computerChoice = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    for (var i = 0; i < computerChoice.length; i++) {
        emptyArray.push("_ ");
    }
    var emptyString = emptyArray.join(" ");
    var html =
        "<p>Press any key to get started!</p>" +
        "<p>Wins " + wins + "</p>" +
        "<p>Current Word</p>" +
        "<p>" + emptyString + "</p>" +
        "<p>Number of guesses remaining:</p>" +
        "<p>" + guessRemain + "</p>" +
        "<p>Letters already guessed:</p>" +
        "<p>" + guesses + "</p>";
    document.getElementById("game").innerHTML = html;
    console.log(computerChoice + " inside reset");
    console.log(emptyString + " inside reset");
}

reset();

document.onkeyup = function (event) {
    console.log(computerChoice + " inside event");
    currentGuess = event.key.toUpperCase();
    guessRemain--;
    if (computerChoice.indexOf(currentGuess) === -1) {
        guesses.push(currentGuess);
        console.log(guesses);
    }
    else {
        var index = computerChoice.indexOf(currentGuess);
        emptyArray[index] = currentGuess;
        console.log(emptyArray.toString());
    }
    var guessDisplay = guesses.join(" ");
    var emptyString = emptyArray.join(" ");
    console.log(guessDisplay);
    var html =
    "<p>Press any key to get started!</p>" +
    "<p>Wins " + wins + "</p>" +
    "<p>Current Word</p>" +
    "<p>" + emptyString + "</p>" +
    "<p>Number of guesses remaining:</p>" +
    "<p>" + guessRemain + "</p>" +
    "<p>Letters already guessed:</p>" +
    "<p>" + guessDisplay + "</p>";
    document.getElementById("game").innerHTML = html;
}


//console.log(emptyString);
//document.getElementById("currentWord").innerHTML = emptyString;