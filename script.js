// * global scope for the scores
function playRPS(){
    const computerScore = 0;
    const playerScore = 0;
    
    // * defining the buttons
    // do I need function? - changed to get element id
    
    function playGame() {
    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");

    // not defined
    rockButton.addEventListener("click", () => handleClick("Rock"));
    paperButton.addEventListener("click", () => handleClick("Paper"));
    scissorsButton.addEventListener("click", () => handleClick("Scissors"));
    const computerChoice = ["rock", "paper", "scissors"];

    // * player and computer options
    const cpuOption = Math.floor(Math.random() * 3) + 1;
    computer = computerChoice[cpuOption];
    };
    playGame();
    
    // * all possibilities win, loss and draw
    //  do I need function?
    

    
    function result(player, computer) {
        const playerWins = document.querySelector(".pWins")
        const computerWins = document.querySelector(".cWins")
        const result = document.querySelector(".outcome")

        if (player === computer) {
            result.textContent = "Tie"

        } else if (player == "rock" && computer == "scissors") {
            result.textContent = "Player Wins"
            playerScore++
            playerWins.textContent = playerScore
        } else if (player == "paper" && computer == "rock") {
            result.textContent = "Player Wins"
            playerScore++
            playerWins.textContent = playerScore
        } else if (player == "scissors" && computer == "paper") {
            result.textContent = "Player Wins"
            playerScore++
            playerWins.textContent = playerScore
        } else if (computer == "rock" && player == "scissors") {
            result.textContent = "computer Wins"
            computerScore++
            computerWins.textContent = computerScore
        } else if (computer == "paper" && player == "rock") {
            result.textContent = "computer Wins"
            computerScore++
            computerWins.textContent = computerScore
        } else if (computer == "scissors" && player == "paper") {
            result.textContent = "computer Wins"
            computerScore++
            computerWins.textContent = computerScore
        } 
    
    };
    playGame(), result()
};

console.log(playRPS());



let rdm = Math.floor(Math.random() * 3) + 1
console.log(rdm)


// * Things to learn 
// * Make notes of the different stages that I am on
// * The DOM process

// // ! Reference the buttons for ROCK / PAPER / SCISSORS

// let choices = ["Rock", "Paper", "Scissors"];
// let score = 0;

// // ? Functionality for random computer choice from array
// function cpuChoice() {
//   let compChoice = choices[Math.floor(Math.random() * 3)];
//   return compChoice;
// }

// function handleClick(playerChoice) {
//   // * Run the cpuChoice function to get the computer choice
//   let compChoice = cpuChoice();
//   console.log(`Computer: ${compChoice}`);
//   console.log(`Player: ${playerChoice}`);
//   //   * Add logic to check who wins if / else statement
//   if (compChoice === "Scissors" && playerChoice === "Rock") {
//     return "Players wins";
//   }
// }

// // * Add Event Listener to eahc button and pass the chocie ass the argument for the handle click funtcion
// rockButton.addEventListener("click", () => handleClick("Rock"));
// paperButton.addEventListener("click", () => handleClick("Paper"));
// scissorsButton.addEventListener("click", () => handleClick("Scissors"));