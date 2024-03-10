// Create variable to hold all choices and Scores
const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;


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

// Function to get Score
function getScore(){
    return `Your Score is ${playerScore}, Computer Score is ${computerScore}`;
}

// Function check for a winner
function checkWinner(){
    if (playerScore == 5){
        playerScore = 0;
        computerScore = 0;
        return log.textContent = "Congratulations you win!";
    } else if (computerScore == 5){
        playerScore = 0;
        computerScore = 0;
        return log.textContent = "Too bad, you lose!";
    }
    return getScore();
}

// Function to compare results
function playRound(playerSelection, computerSelection) {
    // Rock options
    if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore++;
        return log.innerText = `You won! Rock beats Scissors \n ${checkWinner()}`;
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore++;
        return log.innerText = `You lose! Paper beats Rock \n ${checkWinner()}`
    }

    // Paper options
    else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore++;
        return log.innerText = `You won! Paper beats Rock \n ${checkWinner()}`
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++;
        return log.innerText = `You lose! Scissors beats Paper \n ${checkWinner()}`;
    }

    // Scissors options
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++;
        return log.innerText = `You won! Scissors beats Paper \n ${checkWinner()}`;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++;
        return log.innerText = `You lose! Rock beats Scissors \n ${checkWinner()}`;
    }
    // It's a Tie
    else {
        return log.innerText = `Too bad! its a tie \n ${checkWinner()}`;
    }
}

// Here down is the for HTML interactivity

// Select and addEventListeners to all buttons to be able to playRound
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => button.addEventListener("click", () => playRound(button.id, getComputerSelection())));

// Log Div and Game wise
const log = document.querySelector("#log");

