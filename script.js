playRound(computerPlay(), userPlay());

function computerPlay() {
  let randomNumber = Math.random();

  if (randomNumber <= 0.3) {
    return "scissors";
  }

  if (randomNumber > 0.3 && randomNumber <= 0.7) {
    return "paper";
  }

  if (randomNumber > 0.7) {
    return "rock";
  }
}

function userPlay() {
  let playerInput = prompt("enter your selecion")?.trim().toLowerCase();

  if (playerInput == null) {
    alert(
      "You have to play game, please enter the valid word (Rock, Paper or Scissors)"
    );
  }

  if (playerInput == "rock") {
    return playerInput;
  }

  if (playerInput == "paper") {
    return playerInput;
  }

  if (playerInput == "scissors") {
    return playerInput;
  } else {
    alert("Please eneter the valid word (Rock, Paper or Scissors)");
  }

  return userPlay();
}

function playRound(computerSelection, playerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "paper") ||
    (playerSelection == "scissors" && computerSelection == "scissors")
  ) {
    console.log("draw, please play again");
    return playRound(computerPlay(), userPlay());
  }

  if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    console.log("you lose, Paper beats Rock");
  }

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    console.log("you won, Rock beats Scissors");
  }
}
