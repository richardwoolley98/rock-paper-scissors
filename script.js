const options = ['Rock', 'Paper', 'Scissors'];
function computerPlay() {
    return options[Math.floor(Math.random()*(options.length))];
}

function playerPlay() {
    return window.prompt("Enter your guess");
}

function gameRun(playerPlay, computerPlay) {
    computerSelection = computerPlay();
    playerSelection = playerPlay();
    guess = playerSelection.toUpperCase();
    if (guess == 'ROCK' && computerSelection == 'Paper') {
        return "You Lose! Paper beats Rock";
    }
    else if (guess == 'ROCK' && computerSelection == 'Rock') {
        return "Draw! You both guessed Rock";
    }
    else if (guess == 'ROCK' && computerSelection == 'Scissors') {
        return "You Win! Rock beats Scissors";
    }

    else if (guess == 'PAPER' && computerSelection == 'Scissors') {
        return "You Lose! Scissors beats Paper";
    }

    else if (guess == 'PAPER' && computerSelection == 'Paper') {
        return "Draw! You both guessed Paper";
    }

    else if (guess == 'PAPER' && computerSelection == 'Rock') {
        return "You Win! Paper beats Rock";
    }

    else if (guess == 'SCISSORS' && computerSelection == 'Scissors') {
        return "Draw! You both guessed Scissors";
    }

    else if (guess == 'SCISSORS' && computerSelection == 'Paper') {
        return "You Win! Scissors beats Paper";
    }

    else if (guess == 'SCISSORS' && computerSelection == 'Rock') {
        return "You Lose! Rock beats Scissors";
    }
}

function game(gameRun) {
    MyScore = 0
    ComputerScore = 0
    for (let i = 1; i < 6; i++) {
        result = gameRun(playerPlay,computerPlay)
        if (result.includes("Lose") == true) {
            ComputerScore += 1;
            console.log("You lost Round" + i);
        }
        else if (result.includes("Draw") == true) {
            ComputerScore += 1;
            MyScore += 1;
            console.log("You drew Round" + i);
        }
        if (result.includes("Win") == true) {
            MyScore += 1;
            console.log("You won Round" + i);
        }
    }
    if (MyScore > ComputerScore) {
        console.log("You won")
    }
    else {
        console.log("You lost")
    }
}

console.log(game(gameRun));
