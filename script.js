let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors'];
    return choice[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        computerScore++;
        return 'You Lose! Paper beats Rock!';
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        playerScore++;
        return 'You Win! Rock beats Scissors!';
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        playerScore++;
        return 'You Win! Paper beats Rock';
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        computerScore++;
        return 'You Lose! Scissors beat Paper!';
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        computerScore++;
        return 'You Lose! Rock beats Scissors';
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        playerScore++;
        return 'You Win! Scissors beat Paper!';
    }
    else
        return "Alas! It is a tie!";
}

let playerSelection;
let computerSelection;
const btn = document.querySelector(".btns");

btn.addEventListener("click", (event) => {

    const target = event.target;
    switch(target.id) {
        case 'rock':
            playerSelection = 'Rock';
            computerSelection = getComputerChoice();
            break;
        case 'paper':
            playerSelection = 'Paper';
            computerSelection = getComputerChoice();
        case 'scissors':
            playerSelection = 'Scissors';
            computerSelection = getComputerChoice();
    }
    let result = playRound(playerSelection, computerSelection);

    let res = document.querySelector("#result");
    res.textContent = result;
})
  