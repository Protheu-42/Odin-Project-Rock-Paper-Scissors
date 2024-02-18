// Create variable to hold all choices
const options = ["rock", "paper", "scissors"];

// Player input
let playerChoose = prompt("Rock, paper or scissors?");

// Put input to lowercase
playerChoose = playerChoose.toLowerCase();

// Check if the answer is one of the three options
if (playerChoose != "rock" && playerChoose != "paper" && playerChoose != "scissors"){
    console.log("Choose one of the three options!")
}


// Computer input
let computerChoose = getComputerChoose();

    // Function for the computer choose one of three options
function getComputerChoose() {
    const random = Math.floor(Math.random() * options.length);
    return options[random];
};

// Function to compare results

    // Comparison through simple if or else
    // Return result

// Display the winner