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
let computerChoose = "paper";

    // Function for the computer choose one of three options
function getComputerChoose() {
    const random = Math.floor(Math.random() * options.length);
    return options[random];
};

// Function to compare results
function playRound(playerSelection, computerSelection) {
    // Rock options
    if (playerSelection == "rock" && computerSelection == "scissors"){
        return "You won! Rock beats Scissors";
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        return "You lose! Paper beats Rock";
    }

    // Paper options
    else if (playerSelection == "paper" && computerSelection == "rock"){
        return "You won! Paper beats Rock";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "You lose! Scissors beats Paper";
    }

    // Scissors options
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "You won! Scissors beats Paper";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        return "You lose! Rock beats Scissors";
    }

    else {
        return "Too bad! its a tie"
    }

}
console.log(playRound(playerChoose, computerChoose));
