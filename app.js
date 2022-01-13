let userScore = 0;
let computerScore = 0;
const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector('#computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.querySelector('#r');
const paper_div = document.querySelector('#p');
const scissors_div = document.querySelector('#s');

function getComputerChoice(){
    const choices = ["r", "p", "s"];
    const rendomNumber = Math.floor(Math.random() * 3);
    return choices[rendomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    else return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = convertToWord(userChoice) + smallUserWord + " beats " + convertToWord(computerChoice) + smallCompWord + ". You Won.";
    userChoice_div.classList.add('green-glow');
    setTimeout(() => {
        userChoice_div.classList.remove('green-glow')
    }, 400);
}
function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = convertToWord(userChoice) + smallUserWord + " loses " + convertToWord(computerChoice) + smallCompWord + ". You Lost.";
    userChoice_div.classList.add('red-glow');
    setTimeout(() => {
        userChoice_div.classList.remove('red-glow')
    }, 400);
}
function draw(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = convertToWord(userChoice) + smallUserWord + " equal " + convertToWord(computerChoice) + smallCompWord + ". It's a draw.";
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => {
        userChoice_div.classList.remove('grey-glow')
    }, 400);

}
function game(userChoice) {
    computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();