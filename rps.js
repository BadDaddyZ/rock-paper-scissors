
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices [Math.floor(Math.random() * choices.length)];
}      
function playRound() {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt ('Choose your weapon: Rock, Paper, or Scissors').toLowerCase();
    console.log("Computer selects: " + computerSelection);
    console.log("Player seelcts: " + playerSelection);

        if (computerSelection === playerSelection) {
            console.log('Tie');
        } else if 
            (computerSelection === 'rock' && playerSelection === 'scissors' || computerSelection === 'scissors' && playerSelection === 'paper' || computerSelection === 'paper' && playerSelection === 'rock') {
            console.log('Computer wins');        
        } else {
            console.log('You Win');
        };
        }
function game () {
    let rounds = parseInt(prompt("How many rounds would you like to play?"));
    for (let i = 1; i <= rounds; i++) {
        console.log("Round " +i);
        playRound();
    }
}

game();