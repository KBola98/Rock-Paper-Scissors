function getComputerChoice(){
    const randomNum = Math.random();

    if(randomNum < 0.33){
        return "rock"; 
    }if(randomNum < 0.66){
        return "rock"; 
    }else {
        return "scissors"; 
    }
    
}

console.log(getComputerChoice());


function getHumanChoice(){
    const choice = prompt("Enter your Choice:").toLowerCase();
    if (choice === "rock" ||  choice ==="paper" || choice ==="scissors"){
        return choice;
    }
    else{
        return "Invalid Choice Entered";
    }
}




let humanScore=0;
let computerScore=0;


function playRound(humanChoice, computerChoice){
    
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    } else {
        console.log("Invalid input. Please enter 'rock', 'paper', or 'scissors'.");
    }

    // Log the updated scores
    console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
}




function playGame(){
    for (i=0;i<5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the game. Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lost the game. Better luck next time! Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`The game is a tie! Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    }
}
  


playGame();