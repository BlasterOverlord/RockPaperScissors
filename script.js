let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors'];
    return choice[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        return 'You Lose! Paper beats Rock!';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return 'You Win! Rock beats Scissors!';
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return 'You Win! Paper beats Rock';
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        return 'You Lose! Scissors beat Paper!';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return 'You Lose! Rock beats Scissors';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return 'You Win! Scissors beat Paper!';
    }
    else
        return "Alas! It is a draw!";
}


// const playerSelection = prompt(`Rock, Paper or Scissors? (Round ${i})`);
// const computerSelection = getComputerChoice();
// console.log(`Round ${i}:`);
// console.log(playRound(playerSelection, computerSelection));
// console.log(`Player Score: ${playerScore}`);
// console.log(`Computer Score: ${computerScore}`);
  