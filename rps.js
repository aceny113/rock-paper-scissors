


function getComputerChoice() {
    let computerChoice = Math.floor((Math.random() * 3) + 1);

    if (computerChoice === 1) {
        return "Rock";
    }
    else if (computerChoice === 2) {
        return "Paper";
    }
    else if (computerChoice === 3) {
        return "Scissor";
    }
}

function getHumanChoice() {
    let humanChoice = Number(prompt("Type 1 for Rock, Type 2 for Paper, and 3 for Scissors"));

    if (humanChoice === 1) {
        return "Rock";
    }
    else if (humanChoice === 2) {
        return "Paper";
    }
    else if (humanChoice === 3) {
        return "Scissor";
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            console.log("Draw! Next Round!");
        }
        else if (humanChoice === "Rock" && computerChoice === "Scissor") {
            console.log("You Win! Rock Beat Scissor!");
            humanScore++;
        }
        else if (humanChoice === "Paper" && computerChoice === "Rock") {
            console.log("You Win! Rock Beat Scissor!");
            humanScore++;
        }
        else if (humanChoice === "Scissor" && computerChoice === "Paper") {
            console.log("You Win! Rock Beat Scissor!");
            humanScore++;
        }
        else {
            console.log(`You Lost! ${computerChoice} beats ${humanChoice}`)
            computerScore++;
        }

    }
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("You lost the game.");
    } else {
        console.log("It's a tie game!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



playGame();

