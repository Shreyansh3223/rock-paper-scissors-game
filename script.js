let userScore = 0;
let compScore = 0;

let AllChoice = document.querySelectorAll(".choice");
let userScorePara = document.querySelector(".user-score");
let compScorePara = document.querySelector(".comp-score");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector("#msg-container");

// All choice selected
AllChoice.forEach((Choice) => {
  Choice.addEventListener("click", () => {
    let userChoice = Choice.getAttribute("id");
    console.log("User Choice = ", userChoice);
    gamePlay(userChoice);
  });
});

// Game Play
const gamePlay = (userChoice) => {
  let compChoice = compRandChoice();
  console.log("Computer Choice = ", compChoice);
  // Game Check
  if (userChoice === compChoice) {
    // Game Draw
    gameDraw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // Comp -> paper, scissor
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // Comp -> rock, scissor
      userWin = compChoice === "scissor" ? false : true;
    } else {
      // Comp -> rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

// Show Winner
const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = "You Win!";
    msgContainer.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = "You lose";
    msgContainer.style.backgroundColor = "red";
  }
};

// Game Draw
let gameDraw = () => {
  msg.innerText = "Game was draw. Play again.";
  msgContainer.style.backgroundColor = "#081B31";
};

// Get random computer choice
const compRandChoice = () => {
  let choice = ["rock", "paper", "scissor"];
  let randIdx = Math.floor(Math.random() * 3);
  return choice[randIdx];
};
