//get computer choice
//get user choice
//create program that determines winner
//print winner and loser messages including what beats what
getPlayerChoice();

function getComputerChoice()
{
    //todo
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
        console.log(playerChoice)
        return playerChoice;
    }
}

function determineWinner()
{
    //todo
}

function printWinner()
{
    //todo
}

function playRound()
{
    getComputerChoice();
    getPlayerChoice();
    determineWinner();
    printWinner();
}

let winner = "none";

function game()
{
    let computerWins = 0;
    let playerWins = 0;

    While (computerWins < 3 && playerWins < 3)
    {
        playRound();

        if (winner == computer)
        {
            computerWins++;
        }

        else
        {
            playerWins++;
        }
    }

    let winStatement = "GAME OVER!!\n" + winner + " wins, best of 5!"

    console.log(winStatement)
}