
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}      
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const playerChoice = playerSelection.toLowerCase();
   
    const resultsDiv = document.getElementById('results');
    //resultsDiv.innerHTML = 'Player selects: ${playerChoice}<br>Computer selects: ${computerSelection}<br>';


        if (computerSelection === playerChoice) {
            resultsDiv.innerHTML += 'It\'s a Tied!';
        } else if 
            (computerSelection === 'rock' && playerChoice === 'scissors' || computerSelection === 'scissors' && playerChoice === 'paper' || computerSelection === 'paper' && playerChoice === 'rock') {
            resultsDiv.innerHTML += 'Computer wins this round!';
            } else {
            resultsDiv.innerHTML += 'You win this round!';
        };
        }
//function game () {
  //  let rounds = parseInt(prompt("How many rounds would you like to play?"));
    //for (let i = 1; i <= rounds; i++) {
      //  console.log("Round " +i);
        //playRound();
    //}
//}

document.getElementById('rock').addEventListener('click', function() { playRound('rock'); });
document.getElementById('paper').addEventListener('click', function() { playRound('paper'); });
document.getElementById('scissors').addEventListener('click', function() { playRound('scissors'); });