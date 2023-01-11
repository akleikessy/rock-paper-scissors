const buttons = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;

//randomly generate Rock, paper or scissors
function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];
    let randomChoice = choice[Math.floor(Math.random() * choice.length)];
    return randomChoice;
}

function disableButtons(){
    buttons.forEach( e => {
        e.disabled = true;
    });
}

function playRound(playerSelection){
    
    let computerSelection = getComputerChoice();
   
    let result = "";
    if ((playerSelection == "rock" && computerSelection ==  "scissors") || 
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")){

            playerScore += 1;
            result = "You win! <b>" + playerSelection + "</b> beats <b>" + computerSelection +
                        "</b><br><br>Player score: <b>" + playerScore + "</b><br>Computer score: <b>" 
                        + computerScore +"</b>";
        if (playerScore == 5){
            result += "<br><br> You won the game! Reload the page to play again";
            disableButtons();

        }   
    } else if (playerSelection == computerSelection) {
        result = "It's a Draw. You both chose <b>" + playerSelection + 
                 "</b><br><br> Player score: <b>" + playerScore + "</b><br>Computer score: <b>"
                 + computerScore +"</b>";
    } else {
        computerScore += 1;
        result = "You lose! <b>" + computerSelection + "</b> beats <b>" + playerSelection +
                "</b><br><br>Player score: <b>" + playerScore + "</b><br>Computer score: <b>"
                + computerScore + "</b>";
        if ( computerScore == 5) {
            result = "<br><br>I won the game! Reload the page to play again";
            disableButtons();
        }
    }
    
    document.getElementById("result").innerHTML = result;
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});