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
const answersElement = document.getElementById("answers-button");

let currentQuestionList = 0;
let score = 0;
let timeLeft = 60;
let timer;

function startQuiz() {
    console.log("start quiz");
    currentQuestionList = 0;
    score = 0;
    showQuestion();
}

    timer = setInterval(function() {
    timeLeft--;
    document.querySelector(".time-left").innerText = timeLeft;

    if(timeLeft <= 0) {
        clearInterval(timer);
        showResult();
    }
}, 1000);

function showQuestion() {
    let currentQuestion = questions[currentQuestionList];
    let questionNo = currentQuestionList + 1;
    questionElement.innerText = questionNo + "." + currentQuestion.
        questions;

        for(let i=0;i<4;i++){

            answerButton[i].innerText = currentQuestion.answers[i].text;
            answerButton[i].setAttribute("data-correct",currentQuestion.answers[i].correct)
        }
    
}

startQuiz();

