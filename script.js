// Create variable to hold all choices
const options = ["rock", "paper", "scissors"];


// Function to collect player and computer choose
function getPlayerSelection() {
    // Player input
    let playerChoose = prompt("Rock, paper or scissors?");
    // Put input to lowercase
    playerChoose = playerChoose.toLowerCase();
    if (checkPlayerTypo(playerChoose) == false){
        return false;
    }

    //return values
    return playerChoose;
}

// Check if the answer is one of the three options
function checkPlayerTypo(playerChoose) {
    if (playerChoose != "rock" && playerChoose != "paper" && playerChoose != "scissors"){
        console.log("Choose one Rock, paper or scissors!");
        return false;
    }
}

// Function for the computer choose one of three options
function getComputerSelection() {
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
    // It's a Tie
    else {
        return "Too bad! its a tie"
    }

}

// Here down is the for HTML interactivity

// Select and addEventListeners to all buttons to be able to playRound
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => button.addEventListener("click", () => playRound(button.id, getComputerSelection())));
