const computerChoice = ['Rock', 'Paper', 'Scissors']

function getComputerChoice()  {
    const choice = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    console.log(choice);
}

getComputerChoice();

function getPlayerChoice() {
    playerChoice = prompt('Choose your weapon - Rock Paper or Scissors')
}

getPlayerChoice();