const btnContainer = document.createElement("div");
document.body.appendChild(btnContainer);

const title = document.createElement("h3");
title.textContent = "Welcome to Rock Paper Scissor Game!";

const rock = document.createElement("button");
rock.textContent = "Rock";

const paper = document.createElement("button");
paper.textContent = "Paper";

const scissor = document.createElement("button");
scissor.textContent = "Scissor";

const startBtn = document.createElement("button");


const myChoice = document.createElement("div");
document.body.appendChild(myChoice);

const enemyChoice = document.createElement("div");
document.body.appendChild(enemyChoice);

const judge = document.createElement("div");
document.body.appendChild(judge);

const score = document.createElement("div");
document.body.appendChild(score);

btnContainer.appendChild(title);
btnContainer.appendChild(rock);
btnContainer.appendChild(paper);
btnContainer.appendChild(scissor);



function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) {
    enemyChoice.textContent = `Enemy: Rock`;
    return "Rock";
  } else if (randomNumber === 2) {
    enemyChoice.textContent = `Enemy: Paper`;
    return "Paper";
  } else {
    enemyChoice.textContent = `Enemy: Scissor`;
    return "Scissor";
  }
}

function getHumanChoice() {
  btnContainer.addEventListener("click", (event) => {
    let target = event.target;
    let humanSelection = target.textContent;

    switch (humanSelection) {
      case "Rock":
        playRound(humanSelection, getComputerChoice());
        myChoice.textContent = `You: ${humanSelection}`;
        break;
      case "Paper":
        playRound(humanSelection, getComputerChoice());
        myChoice.textContent = `You: ${humanSelection}`;
        break;
      case "Scissor":
        playRound(humanSelection, getComputerChoice());
        myChoice.textContent = `You: ${humanSelection}`;
        break;
      default:
        console.log();
    }
  });
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    judge.textContent = "It's a tie";
  } else if (humanChoice === "Rock" && computerChoice === "Scissor") {
    judge.textContent = "You Win! Rock beats Scissor";
    humanScore++;
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    judge.textContent = "You Win! Paper beats Rock";
    humanScore++;
  } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
    judge.textContent = "You Win! Scissor beats Paper";
    humanScore++;
  } else {
    judge.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  }
  score.textContent = `Human: ${humanScore} Computer Score: ${computerScore}`;

  endGame();

}

function endGame() {
  if (humanScore === 5) {
    console.log("You won!");
    title.textContent = "You won!";
    rock.disabled = paper.disabled = scissor.disabled = true;
    document.body.appendChild(startBtn);
    startBtn.textContent = "Play Again";
  } else if (computerScore === 5) {
    console.log("You lost!");
    title.textContent = "You lost!";
    rock.disabled = paper.disabled = scissor.disabled = true;
    document.body.appendChild(startBtn);
    startBtn.textContent = "Play Again";
  }
}

function playAgain() {
  startBtn.addEventListener("click", () => {
    
  rock.disabled = paper.disabled = scissor.disabled = false;
  document.body.removeChild(startBtn);

    humanScore = 0;
    computerScore = 0;
    myChoice.textContent = "";
    enemyChoice.textContent = "";
    judge.textContent = "";
    score.textContent = "";

  });

}

let humanScore = 0;
let computerScore = 0;

getHumanChoice();
playAgain();