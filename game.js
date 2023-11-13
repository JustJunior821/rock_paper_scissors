function getComputerChoice() {
    let something = Math.random();
    if (something < 1/3)
        return "rock";
    else if (something > 1/3 && something < 2/3)
        return "paper";
    else if (something > 2/3 && something <= 1)
        return "scissors";
}