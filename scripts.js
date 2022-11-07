//get computer choice
//get user choice
//create program that determines winner
//print winner and loser messages including what beats what

let roundCount = 1;
let winner = "none";
let computerSelection = "none";
let playerSelection = "none";

game();

function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0)
    {
        computerSelection = "Rock";
    }

    else if (choice == 1)
    {
        computerSelection = "Paper";
    }
    
    else
    {
        computerSelection = "Scissors";
    }

    console.log("Computer Choice: " + computerSelection);
}

function getPlayerChoice()
{
    let playerChoice = prompt("Rock, Paper, or Scissors?: ");
    let newString = playerChoice.charAt(0).toUpperCase() + playerChoice.toLowerCase().slice(1);
    playerChoice = newString;

    if (playerChoice != "Rock" && playerChoice != "Paper" && playerChoice != "Scissors")
    {
        alert("Invalid Choice.  Choose Again!");
        getPlayerChoice();
    }

    else
    {
        console.log("Player Choice: " + playerChoice);
        playerSelection = playerChoice;
    }
}

function determineWinner()
{
    if (computerSelection === playerSelection)
    {
        winner = "none";
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

    return;
}

function printWinner()
{
    if (winner == "none")
    {
        alert("Both Players Chose " + computerSelection + ".  The Round Starts Over!");
    }

    else
    {
        alert("Round " + roundCount + "'s Winner is " + winner + "!");
    }
}

function playRound()
{
    getComputerChoice();
    getPlayerChoice();
    determineWinner();
    printWinner();
}

function game()
{
    let computerWins = 0;
    let playerWins = 0;

    while (computerWins < 3 && playerWins < 3)
    {
        playRound();

        if (winner == "Computer")
        {
            computerWins++;
        }

        else if (winner == "Player")
        {
            playerWins++;
        }

        else
        {
            continue;
        }

        roundCount++;
    }

    let winStatement = "GAME OVER!!\n" + winner + " wins, best of 5!";

    alert(winStatement);
}