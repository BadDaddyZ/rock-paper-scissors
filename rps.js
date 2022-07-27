
function game() {
let rounds = parseInt(prompt('How many rounds would you like to play'));
for (let i = 1; i <= rounds; i++) {   
      
function playRound(playerSelection, computerSelection) {
    const computerChoice = ['rock', 'paper', 'scissors']

    function getComputerChoice()  {
        const computerSelection = computerChoice[Math.floor(Math.random() * computerChoice.length)];        
        console.log(computerSelection);
        
        const playerSelection = prompt ('Choose your weapon Rock Paper or Scissors');
           const playerChoice = (playerSelection.toLowerCase());
           console.log(playerChoice);
                
        if (computerSelection === playerChoice) {
            console.log('Tie');
        } else if 
            (computerSelection === 'rock' && playerChoice === 'scissors' || computerSelection === 'scissors' && playerChoice === 'paper' || computerSelection === 'paper' && playerChoice === 'rock') {
            console.log('Computer wins');        
        } else if (playerChoice === 'rock' && computerSelection === 'scissors' || playerChoice === 'scissors' && computerSelection === 'paper' || playerChoice === 'paper' && computerSelection === 'rock') {
            console.log('You Win');
        }
        }
        getComputerChoice();
        return [playerSelection, computerSelection];
    }   
    playRound();    
}
}
game();