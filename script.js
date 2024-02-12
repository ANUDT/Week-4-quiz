const questions = [
{
questions: "How long is the longest wedding veil in the world?",
answers: [ 
{ text: "23.000 Feet, same lenght as 63.5 football fields", correct: true},
{ text: "Same height as the Effel Tower", correct: false},
{ text: "Same lenght as Big Ben", correct: false},
{ text: "5.73 meters long", correct: false},
    ]
},

{
questions: "What are the biggest diamond on Earth and Crown Jewel?",
answers: [ 
{ text: "29 carat Sirkionia", correct: false},
{ text: "The pink Panther", correct: false},
{ text:"Great Star of Africa, 3,106 carat from South Africa in 1905", correct: true},
{ text: "Kohinoor", correct: false},
    ]
},

{
questions: "What is a group of bunnies called?",
answers: [ 
{ text:"29 carat Sirkionia", correct: false},
{ text:"The pink Panther", correct: false},
{ text:"SGreat Star of Africa, 3,106 carat from South Africa in 1905", correct: true},
{ text: "Kohinoor", correct: false},
    ]
},

{
questions: "What can you hear from a    blue whale from more then 2 miles away?",
answers: [ 
{ text:"Giggles troops", correct: false},
{ text:"Fluffle", correct: true},
{ text:"Bunkies", correct: false},
{ text:"Chippies", correct: true},
    ]
} ];

    const questionElement = document.getElementById("question");
    const answerButton = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-buttons");
