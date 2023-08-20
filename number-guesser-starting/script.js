let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (humanGuess, computerGuess, secretTarget) =>
  Math.abs(secretTarget - humanGuess) <= Math.abs(secretTarget - computerGuess);

const updateScore = (winner) =>
  winner === "computer" ? computerScore++ : humanScore++;

const advanceRound = () => currentRoundNumber++;
