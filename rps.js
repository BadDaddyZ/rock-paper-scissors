
function game(
    for (let i = 0; i < 5; i++) {
function rpsMatch(playerSelection, computerSelection) {
    const computerChoice = ['rock', 'paper', 'scissors']

    function getComputerChoice()  {
        const computerSelection = computerChoice[Math.floor(Math.random() * computerChoice.length)];        
        //console.log(computerSelection);
        
        const playerSelection = prompt ('Choose your weapon Rock Paper or Scissors');
           //console.log(playerSelection);
            const playerChoice = (playerSelection.toLowerCase());
           //console.log(playerChoice);
                    
        if (computerSelection === playerChoice) {
            alert('Tie');
        } else if 
            (computerSelection === 'rock' && playerChoice === 'scissors' || computerSelection === 'scissors' && playerChoice === 'paper') {
                alert('Computer wins');        
        } else if (playerChoice === 'rock' && computerSelection === 'scissors' || playerChoice === 'scissors' && computerSelection === 'paper') {
                alert('You Win');
        }
        return [playerSelection, computerSelection];
    }   
     
     console.log(getComputerChoice(playerSelection, computerSelection)); 
    } 
rpsMatch();
    }
)