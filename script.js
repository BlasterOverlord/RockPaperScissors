function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors'];
    console.log(choice[Math.floor(Math.random() * 3)]);
}

getComputerChoice();