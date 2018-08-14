// vars
var wins = 0;
var guesses = [];
var currentGuess = "a";
var emptyArray = [];
var guessRemain = 0;
var correctGuess = 0;
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

// reset function to reset the game without refreshing page
function reset() {
    guesses = [];
    guessRemain = 15;
    emptyArray = []
    // select word from the wordOptions arrays
    computerChoice = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    // create an empty array to be the "current word"
    for (var i = 0; i < computerChoice.length; i++) {
        emptyArray.push("_ ");
    }
    // make "current word" show up with no comma seperators 
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
    // show new HTML
    document.getElementById("game").innerHTML = html;
    console.log(computerChoice + " inside reset");
    console.log(emptyString + " inside reset");
}

// call reset to grab the first word
reset();

// event space
document.onkeyup = function (event) {
    console.log(computerChoice + " inside event");
    // declare the first letter choice and make uppercase 
    currentGuess = event.key.toUpperCase();
    // decrement guesses EACH TIME any key is pressed
    guessRemain--;
    // see if the user choice exists in the word the computer chose
    if (computerChoice.indexOf(currentGuess) === -1) {
        guesses.push(currentGuess);
        console.log(guesses);
    }
    else if (computerChoice.indexOf(currentGuess) !== -1)  {
        // old code only replaced one instance of the char
        // if it is in the array add to the current word on screen
        //var index = computerChoice.indexOf(currentGuess);
        //emptyArray[index] = currentGuess;

        // new code replaces all instances of the char
        var computerChoiceArray = computerChoice.split("");
        console.log(emptyArray.toString());
        computerChoiceArray.forEach(function(item, i) { if (item == currentGuess) emptyArray[i] = currentGuess; });
        correctGuess++;
    }
    if (guessRemain === 0) {
        reset();
    }
    if (emptyArray.indexOf("_ ") === -1) {
        reset();
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