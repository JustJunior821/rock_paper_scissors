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
            return "You win! Rock beats paper.";
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


function game() 
{
    let player_score = 0;
    let comp_score = 0;
    for (let i = 0; i < 5; i++)
    {
        let player_choice = prompt("You're playing rock, paper, scissors! Please choose one of the three options.", "")
        let computer_choice = getComputerChoice();
        let result = playRound(player_choice, computer_choice);
        console.log(result);
        if (result[4] === "l")
            comp_score++;
        else if (result[4] === "w")
            player_score++;
    }
    if (player_score > comp_score)
        return("You win! The final score was " + player_score + " to " + comp_score + ".");
    else if (comp_score > player_score)
        return("You lose! The final score was " + player_score + " to " + comp_score + ".");
    else
        return("You tied! The final score was " + player_score + " to " + comp_score + ".");
}
