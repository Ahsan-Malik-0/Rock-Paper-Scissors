let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#result");
let userScore = document.querySelector("#u_score");
let compScore = document.querySelector("#c_score");
let uScore = 0;
let cScore = 0;

const random = () => {
    compChoice = ['rock', 'paper', 'scissors']
    let rand = Math.floor(Math.random() * 3);
    return compChoice[rand];
}

const draw = () => {
    msg.innerHTML = "Draw, Pic any to play again";
    msg.style.backgroundColor = "rgb(0, 0, 53)";
}

const showResult = (result, userChoice, compChoice) => {
    if (result) {
        msg.innerHTML = `You won, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        uScore++;
    }
    else {
        msg.innerHTML = `Computer won , ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        cScore++;
    }
    userScore.innerHTML = uScore;
    compScore.innerHTML = cScore;
}

const startPlay = (userChoice) => {
    let compChoice = random();

    let result = true;

    if (userChoice === compChoice) {
        draw();
    }
    else {
        
        if (userChoice == 'rock') {
            // Paper, Scissors
            result = (compChoice == 'paper') ? false : true;
        }

        else if (userChoice == 'paper') {
            // Rock, Scissors
            result = (compChoice == 'rock') ? true : false;
        }

        else {
            // Rock, Paper
            result = (compChoice == 'rock') ? false : true; 
        }

        showResult(result, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        startPlay(userChoice);
    });
});