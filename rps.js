

function rpsMatch() {
    const computerChoice = ['rock', 'paper', 'scissors']

    function getComputerChoice()  {
        const choice = computerChoice[Math.floor(Math.random() * computerChoice.length)];        
        console.log(choice);
        
        const playerChoiceInput = prompt ('Choose your weapon Rock Paper or Scissors');
            console.log(playerChoiceInput);
            const playerChoice = (playerChoiceInput.toLowerCase());
            console.log(playerChoice);
                    
        if (choice === playerChoice) {
            alert('Tie');
        } else if 
            (choice === 'rock' && playerChoice === 'scissors' || choice === 'scissors' && playerChoice === 'paper') {
                alert('Computer wins');        
        } else if (playerChoice === 'rock' && choice === 'scissors' || playerChoice === 'scissors' && choice === 'paper') {
                alert('You Win');
        }
    }   
    getComputerChoice();

   
    } 
rpsMatch();