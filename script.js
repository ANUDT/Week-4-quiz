const questions = [
    {
        questions: "How long is the longest wedding veil in the world?",
        answers: [
            { text: "23.000 Feet, same lenght as 63.5 football fields", correct: true },
            { text: "Same height as the Effel Tower", correct: false },
            { text: "Same lenght as Big Ben", correct: false },
            { text: "5.73 meters long", correct: false },
        ]
    },

    {
        questions: "What are the biggest diamond on Earth and Crown Jewel?",
        answers: [
            { text: "29 carat Sirkionia", correct: false },
            { text: "The pink Panther", correct: false },
            { text: "Great Star of Africa, 3,106 carat from South Africa in 1905", correct: true },
            { text: "Kohinoor", correct: false },
        ]
    },

    {
        questions: "What is a capital of The Netherlands?",
        answers: [
            { text: "Groningen", correct: false },
            { text: "Amstelveen", correct: false },
            { text: "Amsterdam", correct: true },
            { text: "Den Haag", correct: false },
        ]
    },

    {
        questions: "What is a group of bunnies called??",
        answers: [
            { text: "Giggles troops", correct: false },
            { text: "Fluffle", correct: true },
            { text: "Bunkies", correct: false },
            { text: "Chippies", correct: true },
        ]
    }];

const startButtonElement = document.getElementById("start-button");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answer-buttons");

let currentQuestionList = 0;
let score = 0;
let timeLeft = 60;
let timer;

function startQuiz() {
startButtonElement.classList.add("hide");
    console.log("start quiz");
    currentQuestionList = 0;
    score = 0;
    showQuestion();

    timer = setInterval(function() {
    timeLeft--;
    document.querySelector(".time-left").innerText = timeLeft;

    if(timeLeft <= 0) {
        clearInterval(timer);
        showResult();
    }
    }, 1000);
}
function showResult() {
  var higscoreContainer = document.querySelector(".highscore-container");
  higscoreContainer.classList.remove("hide");

var questionArea = document.getElementById("question");
var answerButtonArea = document.getElementById("answer-buttons");
questionArea.classList.add("hide");
answerButtonArea.classList.add ("hide");
    // show the result

    // show the save score options  
}


function showQuestion() {
    if (currentQuestionList >= questions.length){
        clearInterval(timer);
        showResult();
        return;
    }

    let currentQuestion = questions[currentQuestionList];
    currentQuestionList++;

    questionElement.innerText = currentQuestionList + "): " + currentQuestion.questions;

    answersElement.innerHTML = "";

    for(let i=0; i<currentQuestion.answers.length; i++){

        const newAnswerButton = document.createElement("button");
        newAnswerButton.textContent = currentQuestion.answers[i].text;
        newAnswerButton.classList.add("btn");

        newAnswerButton.onclick = onAnswerClick;
        answersElement.appendChild(newAnswerButton);
    }
}

function onAnswerClick(event) 
{
    const selectedAnswer = event.target.textContent;
    const currentQuestion = questions[currentQuestionList - 1];

    // loop through the answers and find the correct one
    for(let i=0; i< currentQuestion.answers.length; i++  ){
        if(currentQuestion.answers[i].text === selectedAnswer){
            if(currentQuestion.answers[i].correct === true){
                alert("Correct!");
                score++;
            } else {
                alert("Wrong!");
                timeLeft -= 5;
            }
        }
    }
    showQuestion();
}

startButtonElement.addEventListener("click", startQuiz);

