let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    let randNum = Math.floor(Math.random() * 3) + 1;
    let compChoice = "";

    randNum === 1 ? compChoice = "rock" : randNum === 2 ? compChoice = "paper" : compChoice = "scissors";

    return compChoice;
};

const playRound = (playerSelection, computerSelection) => {
    if (computerSelection === playerSelection) {
        alert(`This round is a tie...`);
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore++;
        alert(`You won! Paper beats Rock!`);
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        playerScore++;
        alert(`You won! Scissors beats Paper!`);
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        playerScore++;
        alert(`You won! Rock beats Scissors!`);
    } else {
        computerScore++;
        alert(`You Lose!  ${computerSelection} beats ${playerSelection}`);
    }
};

const game = () => {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt(`Please select "Rock", "Paper", or "Scissors"`).toLowerCase();
        let computerSelection = getComputerChoice();
        
        if (playerSelection === null) {
            return;
        }

        playRound(playerSelection, computerSelection);
    }
    if (playerScore > computerScore) {
        alert(`You won the game!\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`);
    } else {
        alert(`You lost :(\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`);
    }
};