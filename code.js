// This function will check if the input is a character in the alphabet.
// It will incorporate seamlessly with your own code, and make it safer
// in the process. 

function testForLetter(character) {
    const alphabet = 
    ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", 
     "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n",
     "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u",
     "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"
    ];

    if (alphabet.includes(character)) {
        return true;
    } else {
        return false;
    }
};

// Wrap your code in this if-else statement. The idea is to pass your function's
// argument through the testForLetter function. 
    console.log("Checking for a letter in the alphabet...");
    if (testForLetter(character) === false) {
        console.error("Please enter a letter in the alphabet");
    } else {
        console.log("Input is a letter in the alphabet");
        //Place your code here!!!
    }