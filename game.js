function getComputerChoice() {
    let something = Math.random();
    if (something < 1/3)
        return "rock";
    else if (something > 1/3 && something < 2/3)
        return "paper";
    else if (something > 2/3 && something <= 1)
        return "scissors";
}

function playRound(playerSelection, computerSelection) {
    let p_choice = playerSelection.toLowerCase();
    if (p_choice === "rock")
    {
        if (computerSelection === "rock")
            return "You tie! Rock ties with rock.";
        if (computerSelection === "paper")
            return "You lose! Paper beats rock.";
        if (computerSelection === "scissors")
            return "You win! Rock beats scissors.";
    }
    else if (p_choice === "paper")
    {
        if (computerSelection === "rock")
            return "You won! Paper beats rock.";
        if (computerSelection === "paper")
            return "You tie! Paper ties with paper.";
        if (computerSelection === "scissors")
            return "You lose! Scissors beats paper.";
    }
    else if (p_choice === "scissors") 
    {
        if (computerSelection === "rock")
            return "You lose! Rock beats scissors.";
        if (computerSelection === "paper")
            return "You win! Scissors beats paper";
        if (computerSelection === "scissors")
            return "You tie! Scissors ties with scissors.";
    }
}




// UI for Rock Paper Scissors
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results_section = document.querySelector("#results");




function game() 
{
    //Initial definitions
    let player_score = 0;
    let comp_score = 0;
    let result = "";
    const score = document.createElement("h1");
    score.textContent = "Player: 0 vs. Computer: 0";
    results_section.appendChild(score);

    
    // Button Definitions
    rock.addEventListener("click", () => {
        result = playRound("rock", getComputerChoice());
        const display = document.createElement("p");
        display.textContent = result;
        results_section.appendChild(display);
    
    });
    
    paper.addEventListener("click", () => {
        result = playRound("paper", getComputerChoice());
        const display = document.createElement("p");
        display.textContent = result;
        results_section.appendChild(display);
    });
    
    scissors.addEventListener("click", () => {
        result = playRound("scissors", getComputerChoice());
        const display = document.createElement("p");
        display.textContent = result;
        results_section.appendChild(display);
    });

    // Scoring and Score Total:

    if (result[4] === "l")
        comp_score++;
    else if (result[4] === "w")
        player_score++;
    score.textContent = `Player: ${player_score} vs. Computer: ${comp_score}`;

    // Final Results
    if (player_score === 5)
        return("You win! The final score was " + player_score + " to " + comp_score + ".");
    else if (comp_score === 5)
        return("You lose! The final score was " + player_score + " to " + comp_score + ".");
}