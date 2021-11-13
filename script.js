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



function playRound(playerSelection, computerSelection){
    var player = playerSelection.toLowerCase();

    switch (player){
        case "rock":
            if(computerSelection === "paper"){
                computerScore += 1;
                return "You Lose! Paper beats Rock";
            } else if (computerSelection === "rock"){
                return "Tie Game!";
            } else {
                playerScore += 1;
                return "You Win! Rock beats Scissors";
            }
            break;
        case "paper":
            if(computerSelection === "paper"){
                return "Tie Game!";
            } else if (computerSelection === "rock"){
                playerScore += 1;
                return "You Win! Paper beats Rock";
            } else {
                computerScore += 1;
                return "You Lose! Scissors beat Paper";
            }
            break;
        case "scissors":
            if(computerSelection === "paper"){
                playerScore += 1;
                return "You Win! Scissors beat Paper";
            } else if (computerSelection === "rock"){
                computerScore += 1;
                return "You Lose! Rock beats Scissors";
            } else {
                return "Tie Game!";
            }
            break;
    }
}

var computerScore = 0;
var playerScore = 0;


function game(){

    for(i=1 ; i <=5; i++){
        var playerSelection = prompt("Rock, Paper, or Scissors?");
        console.log(playRound(playerSelection, computerPlay()));
        console.log("Player: " + playerScore + " Computer: " + computerScore);
    }
}

game();