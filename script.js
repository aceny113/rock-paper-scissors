const buttonsContainer = document.createElement("div");
document.body.appendChild(buttonsContainer);

const title = document.createElement("h3");
title.textContent = "Rock Paper Scissor Game!";
buttonsContainer.appendChild(title);

const rock = document.createElement("button");
rock.setAttribute("id", "rock");
rock.textContent = "Rock";

const paper = document.createElement("button");
paper.setAttribute("id", "paper");
paper.textContent = "Paper";

const scissor = document.createElement("button");
scissor.setAttribute("id", "scissor");
scissor.textContent = "Scissor";

let displayScore = document.createElement("p");
document.body.appendChild(displayScore);

const winner = document.createElement("h2");
winner.textContent = "";

const gameStart = document.createElement("button");
gameStart.setAttribute("id", "startButton");
gameStart.textContent = "Click To Start!";
document.body.appendChild(gameStart);

gameStart.addEventListener("click", () => {
  document.body.removeChild(gameStart);
  round++;
  title.textContent = `Round: ${round}`;
  buttonsContainer.appendChild(rock);
  buttonsContainer.appendChild(paper);
  buttonsContainer.appendChild(scissor);
  getHumanChoice();
});

const currentRound = document.createElement("p");
currentRound.textContent = "";



const restartBtn = document.createElement("button");
restartBtn.textContent = "Play Again!";

restartBtn.style.display = "block";

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3 + 1);

  if (computerChoice === 1) {
    console.log("Computer is Rock");
    return "Rock";
  } else if (computerChoice === 2) {
    console.log("Computer is paper");
    return "Paper";
  } else if (computerChoice === 3) {
    console.log("Computer is scissor");
    return "Scissor";
  }
}

function getHumanChoice() {
  let btnContainer = document.querySelector("div");
  btnContainer.addEventListener("click", (event) => {
    round++;
    title.textContent = `Round: ${round}`;
    let target = event.target;
    let playerChoice = target.textContent;
    if (playerChoice === "Rock") {
      playRound(playerChoice, getComputerChoice());
    } else if (playerChoice === "Paper") {
      playRound(playerChoice, getComputerChoice());
    } else if (playerChoice === "Scissor") {
      playRound(playerChoice, getComputerChoice());
    }

    displayScore.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
    if (humanScore === 3 || computerScore === 3) {
      endGame();
    }
    restartGame();
  });
}

function endGame() {
  rock.disabled = paper.disabled = scissor.disabled = true;
  if (humanScore === 3) {
    winner.textContent = "You Win!";
    displayScore.appendChild(winner);
  } else if (computerScore === 3) {
    winner.textContent = "You Lose! Computer Win!";
    displayScore.appendChild(winner);
  }
}

function restartGame() {
winner.appendChild(restartBtn);
restartBtn.addEventListener('click', () => {
  humanScore = 0;
  computerScore = 0;
  round = 0;
    rock.disabled = paper.disabled = scissor.disabled = false;
})
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
   currentRound.textContent = "Draw! Next Round!";
   document.body.appendChild(currentRound);
   
  } else if (humanChoice === "Rock" && computerChoice === "Scissor") {
   currentRound.textContent = "You Win! Rock Beat Scissor!";
document.body.appendChild(currentRound);
    humanScore++;
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
   currentRound.textContent = "You Win! Rock Beat Scissor!";
   document.body.appendChild(currentRound);
    humanScore++;
  } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
    currentRound.textContent = "You Win! Rock Beat Scissor!";
    document.body.appendChild(currentRound);
    humanScore++;
  } else {
    currentRound.textContent = `You Lost! ${computerChoice} beats ${humanChoice}`;
    document.body.appendChild(currentRound);
    computerScore++;
  }
}

let humanScore = 0;
let computerScore = 0;
let round = 0;
