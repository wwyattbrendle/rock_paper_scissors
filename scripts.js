//Events and DOM Manipulation:
//Images for Button Creation:

//Initialize variables
let clickCounter = 0;
let roundCount = 1;
let winner = "none";
let computerSelection = "none";
let playerSelection = "none";
let computerWins = 0;
let playerWins = 0;
let winStatement = "none";

const container = document.getElementById("container");

const endGame = document.createElement('p');
endGame.classList.add("game-over");

//create container and elements to fill container
const choice = document.createElement("div");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.classList.add("choices");
paper.classList.add("choices");
scissors.classList.add("choices");

//scoreboard
const playerScore = document.querySelector(".player-score p");
const computerScore = document.querySelector(".computer-score p");
playerScore.innerHTML = playerWins;
computerScore.innerHTML = computerWins;

//img sources
const rockPlayer = '<img src="./images/rock-right.png" class="image">';
const paperPlayer = '<img src="./images/paper-right.png" class="image">';
const scissorsPlayer = '<img src="./images/scissors-right.png" class="image">';
const rockComputer = '<img src="./images/rock-left.png" class="image">';
const paperComputer = '<img src="./images/paper-left.png" class="image">';
const scissorsComputer = '<img src="./images/scissors-left.png" class="image">';

//create container for results images and statement for winner
const resultsWindow = document.createElement('div');
resultsWindow.classList.add("results-window");
resultsWindow.style.cssText = "display: flex; flex-direction: column; gap: 15px; align-items: center;";

const winnerDeclaration = document.createElement('h2');
winnerDeclaration.style.cssText = "justify-content: center; align-items: center; padding: 8px; font-size: 50 px; color: white; font-weight: 400;";

const matchup = document.createElement('div');
matchup.style.cssText = "display: flex; gap: 175px;";

const leftSide = document.createElement('div');
const rightSide = document.createElement('div');

matchup.appendChild(leftSide)
matchup.appendChild(rightSide);

const continueButton = document.createElement('button');
continueButton.textContent = "Continue";
continueButton.style.cssText = "background-color: #005c12; width: 200px; height: 75px; border: solid black; border-width: 5px; color: white; border-radius: 12px; font-size: 30px;"

const startOverButton = document.createElement('button');
startOverButton.textContent = "Play Again";
startOverButton.style.cssText = "background-color: #005c12; width: 200px; height: 75px; border: solid black; border-width: 5px; color: white; border-radius: 12px; font-size: 30px;"

const unplannedContainer = document.querySelector(".unplanned-container");

resultsWindow.appendChild(winnerDeclaration)
resultsWindow.appendChild(matchup)
resultsWindow.appendChild(continueButton);

//includes images in buttons
rock.innerHTML = rockPlayer;
paper.innerHTML = paperPlayer;
scissors.innerHTML = scissorsPlayer;

//style for container: flex
choice.style.cssText = "display: flex; justify-content: space-evenly; gap: 15px;";

//append buttons to container
choice.appendChild(rock);
choice.appendChild(paper);
choice.appendChild(scissors);

//start button
const startButton = document.createElement('button');
startButton.style.cssText = "background-color: #005c12; width: 200px; height: 75px; border: solid black; border-width: 5px; color: white; border-radius: 12px; font-size: 30px; margin-top: 100px;"
startButton.textContent = "Start";

container.appendChild(startButton);

startButton.addEventListener("click", () => {
    container.removeChild(startButton);
    getPlayerChoice();
},{
    once: true
})

function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0)
    {
        computerSelection = "Rock";
        leftSide.innerHTML = rockComputer;
    }

    else if (choice == 1)
    {
        computerSelection = "Paper";
        leftSide.innerHTML = paperComputer;
    }
    
    else
    {
        computerSelection = "Scissors";
        leftSide.innerHTML = scissorsComputer;
    }
}

function getPlayerChoice()
{
    getComputerChoice();
    container.appendChild(choice);
    let buttons = document.querySelectorAll('.choices');

    //transition end for buttons
    function removeTransition(e) {
        if(e.propertyName !== 'transform') return;
        buttons.forEach(btn => {
            btn.classList.remove("selected");
        });
        container.removeChild(choice);
        determineWinner();
    }

    //change class for visuals on button click
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.add("selected");
            btn.addEventListener("transitionend", removeTransition);
        });
    },{
        once: true
    });

    rock.addEventListener("click", () => {
        if (clickCounter < roundCount)
        {
            playerSelection = "Rock";
            rightSide.innerHTML = rockPlayer;
            clickCounter++;
        }
    });
    paper.addEventListener("click", () => {
        if (clickCounter < roundCount)
        {
            playerSelection = "Paper";
            rightSide.innerHTML = paperPlayer;
            clickCounter++;
        }
    });
    scissors.addEventListener("click", () => {
        if (clickCounter < roundCount)
        {
            playerSelection = "Scissors";
            rightSide.innerHTML = scissorsPlayer;
            clickCounter++;
        }
    });
}

function determineWinner()
{
    if (computerSelection === playerSelection)
    {
        winner = "none";
        clickCounter--;
    }

    else
    {
        if (computerSelection == "Rock")
        {
            if (playerSelection == "Paper")
            {
                winner = "Player";
            }

            else
            {
                winner = "Computer";
            }
        }
        else if (computerSelection == "Paper")
        {
            if (playerSelection == "Scissors")
            {
                winner = "Player";
            }

            else
            {
                winner = "Computer";
            }
        }
        else
        {
            if (playerSelection == "Rock")
            {
                winner = "Player";
            }

            else
            {
                winner = "Computer";
            }
        }
    }

    winnerDeclaration.textContent = printWinner();
    container.appendChild(resultsWindow);

    if (winner == "Computer")
    {
        computerWins++;
        roundCount++;
        computerScore.innerHTML = computerWins;
    }

    else if (winner == "Player")
    {
        playerWins++;
        roundCount++;
        playerScore.innerHTML = playerWins;
    }

    continueButton.addEventListener("click", () => {
        container.removeChild(resultsWindow);
        if (computerWins < 3 && playerWins < 3){
            getPlayerChoice();
        }

        else{
            endTheGame();
        }

    },{
        once: true
    });
    return;
}

function endTheGame()
{
    winStatement = "GAME OVER!!\n" + winner + " wins, best of 5!";
    endGame.innerHTML = winStatement;
    container.appendChild(endGame);
    //container.appendChild(startOverButton);
    unplannedContainer.appendChild(startOverButton);
    startOverButton.addEventListener("click", () =>{
        playAgain();
    });
}

function printWinner()
{
    let text;
    if (winner == "none")
    {
        text = "It's a tie.  The Round Starts Over!";
    }

    else
    {
        text = "Round " + roundCount + "'s Winner is " + winner + "!";
    }

    return text;
}

function playAgain(){
    container.removeChild(endGame);
    unplannedContainer.removeChild(startOverButton);
    clickCounter = 0;
    roundCount = 1;
    winner = "none";
    computerSelection = "none";
    playerSelection = "none";
    computerWins = 0;
    playerWins = 0;
    playerScore.innerHTML = playerWins;
    computerScore.innerHTML = computerWins;
    winStatement = "none";
    getPlayerChoice();
}