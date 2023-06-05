const questionNumber = document.querySelector(".question-Number");
const questionText = document.querySelector(".question-text");
const OptionContainer = document.querySelector("option-container");

var questionCounter = 0;
var currentQuestion;
var availableQuestions = [];


// push the question into availableQuestions array
function setAvaibleQuestions() {
    const totalQuestion = quiz.length
    for (i = 0; i < totalQuestion; i++) {
        // availableQuestions.push(quiz[i])
        console.log(i)
    }
}

function getNewQuestion(){

    questionText.innerHTML = "Questão" + (questionCounter + 1 ) + "de" + quiz.length;

    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;

    questionCounter++
    
}

function next(){
    if(questionCounter === quiz.length){
        console.log("quiz over")
    } else{
        getNewQuestion();
    }
}

window.reload = function () {

    setAvaibleQuestions();

    getNewQuestion();

}