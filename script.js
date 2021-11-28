function computerPlay(){
    let identifier = Math.floor(Math.random() * 3) + 1;
    if (identifier === 1){
        return "rock";
    } else if (identifier === 2){
        return "paper";
    } else {
        return "scissors";
    }
}

const container = document.querySelector('#container');

const result = document.createElement('p');
result.classList.add('result');
result.textContent = "And the winner is....";
container.appendChild(result);

var computerScore = 0;
var playerScore = 0;

const score = document.createElement('p');
score.classList.add('score');
score.textContent = 'Computer: ' +  computerScore + ' Player: ' + playerScore;
container.appendChild(score);

function playRound(playerSelection, computerSelection){
    var player = playerSelection.toLowerCase();


    switch (player){
        case "rock":
            if(computerSelection === "paper"){
                computerScore += 1;
                result.textContent = "You Lose! Paper beats Rock";
                score.textContent = 'Computer: ' +  computerScore + ' Player: ' + playerScore;
            } else if (computerSelection === "rock"){
                result.textContent = "Tie Game!";
            } else {
                playerScore += 1;
                result.textContent = "You Win! Rock beats Scissors";
                score.textContent = 'Computer: ' +  computerScore + ' Player: ' + playerScore;
            }
            break;
        case "paper":
            if(computerSelection === "paper"){
                result.textContent = "Tie Game!";
            } else if (computerSelection === "rock"){
                playerScore += 1;
                result.textContent = "You Win! Paper beats Rock";
                score.textContent = 'Computer: ' +  computerScore + ' Player: ' + playerScore;
            } else {
                computerScore += 1;
                result.textContent = "You Lose! Scissors beat Paper";
                score.textContent = 'Computer: ' +  computerScore + ' Player: ' + playerScore;
            }
            break;
        case "scissors":
            if(computerSelection === "paper"){
                playerScore += 1;
                result.textContent = "You Win! Scissors beat Paper";
                score.textContent = 'Computer: ' +  computerScore + ' Player: ' + playerScore;
            } else if (computerSelection === "rock"){
                computerScore += 1;
                result.textContent = "You Lose! Rock beats Scissors";
                score.textContent = 'Computer: ' +  computerScore + ' Player: ' + playerScore;
            } else {
                result.textContent = "Tie Game!";
            }
            break;
    }

    if (playerScore === 5) {
        winner.textContent = 'You win!';
        container.appendChild(winner);
    } else if (computerScore === 5) {
        winner.textContent = "Computer wins!";
        container.appendChild(winner);
    } else {
        winner.textContent ="";
        container.appendChild(winner);
    }


}



const rock = document.querySelector('#Rock');
rock.addEventListener('click', () => {
    playRound('rock', computerPlay());
});


const paper = document.querySelector('#Paper');
paper.addEventListener('click', () => {
    playRound('paper', computerPlay());
});

const scissors = document.querySelector('#Scissors');
scissors.addEventListener('click', () => {
    playRound('scissors', computerPlay());
});

const winner = document.createElement('p');
winner.classList.add('winner');




/*
function game(){

    for(i=1 ; i <=5; i++){
        var playerSelection = prompt("Rock, Paper, or Scissors?");
        console.log(playRound(playerSelection, computerPlay()));
        console.log("Player: " + playerScore + " Computer: " + computerScore);
    }
}

game();
*/