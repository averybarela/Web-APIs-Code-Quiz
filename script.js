const startButton =document.getElementById('start-btn')
const questionContainerElement = document.getElementById('questionContainer')
const questionElement =document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-button') 

startButton.addEventListener('click', startGame)

function startGame(){
console.log('Started')
    startButton.classList.add(hide)
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion(){
    showQuestion
}

function showQuestion(question)
function selectAnswer(){

}

const questions = [
    {
     question: 'what is '
        answer: [
            { text: //answer .correct:true},
            {text: //answer, correct:false}
         ]
    }
]

// timer //
var sec = 60;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time out!! :(");
    }
}