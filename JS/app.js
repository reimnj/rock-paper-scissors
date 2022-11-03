const rpsPick = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

for(let i = 0; i < 5; i++) {
    const player = prompt("Select a number (1 - Rock, 2 - Paper, 3 - Scissors)", "1-3");
    const cpu = getComputerChoice();
    console.log(rpsPick[player-1] + " vs. " + rpsPick[cpu]);
    console.log(playRPS(player-1, cpu));
}

function playRPS(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "It's a tie";
    }

    if(playerSelection === 0 && computerSelection === 2) {
        return "Player wins!";
    } 
    else if (playerSelection === 1 && computerSelection === 0) {
        return "Player wins!";
    }
    else if (playerSelection === 2 && computerSelection === 1) {
        return "Player wins!";
    }
    else {
        return "Computer wins!";
    }
}



