

function rpsMatch() {
    const computerChoice = ['Rock', 'Paper', 'Scissors']

    function getComputerChoice()  {
        const choice = computerChoice[Math.floor(Math.random() * computerChoice.length)];        
        console.log(choice);
        
        const playerChoice = prompt ('Choose your weapon Rock Paper or Scissors');
            console.log(playerChoice);
        
        if (choice === playerChoice) {
            alert('Tie');
        } else if 
            (choice === 'Rock' && playerChoice === 'Scissors' || choice === 'Scissors' && playerChoice === 'Paper') {
                alert('Computer wins');        
        } else if (playerChoice === 'Rock' && choice === 'Scissors' || playerChoice === 'Scissors' && choice === 'Paper') {
                alert('You Win');
        }
    }   
    getComputerChoice();

   
    } 
rpsMatch();