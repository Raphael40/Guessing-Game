// Set prompt for user to input max number and check for integer with parseInt
let maximum = parseInt(prompt('Enter your maximum number!'));

// If user did not enter numer use while loop to ask again
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"))
}

// Generate number between 0 and maxnum for user to guess
const targetNum = Math.floor(Math.random() * maximum) + 1;

// Setting a prompt for user to enter guesses
let guess = parseInt(prompt("Enter your first guess!"))
let attempts = 1; 

// while loop that counts attempts and promts user in right direction
// breaks when user gets the right number or quits
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = (prompt("Too high! Enter a new guess:"));
    } else {
        guess = (prompt("Too low! Enter a new guess:"))
    }
}

// Final statement to print end game result if you quit or if you guessed correct
if (guess === 'q') {
    console.log("OK, YOU QUIT, LOSER!")
} else {
    console.log("CONGRATS YOU WIN!")
    console.log(`You got it! it took you ${attempts} guesses`)
}