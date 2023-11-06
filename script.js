var intro = document.getElementById('intro')
const userIn = document.querySelector(".input-group")
var nameInput = document.getElementById("AH")
const startButton = document.getElementById('startBTN')
const nextButton = document.getElementById('nextBTN')
const saveButton = document.getElementById('saveBTN')
const questionContainerElement = document.getElementById('qCard')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answerBTNs')
var timerElement = document.querySelector(".timer-text");

let score = 0
let shuffledQuestions, currentQuestionIndex
var timer;
var timerCount;
var winCounter = 0;

saveButton.addEventListener('click', saveScore)
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    timerCount = 60;

    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    intro.innerHTML = ""
    setNextQuestion()
    startTimer()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('BTN')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    keepScore(selectedButton, correct)
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        saveButton.classList.remove('hide')
        userIn.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {

   
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function keepScore(element, correct) {
    if (correct) {
        score++ 
     } else {
        timerCount -=5;
     }

}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function saveScore() {

    var name = nameInput.value;
    console.log(name)
    localStorage.setItem("initials", name)
    localStorage.setItem("userScore", score)
    console.log(score)
}



function startTimer() {
    timer = setInterval(function () {
        if (timerCount <=0) {
            clearInterval(timer)
        } 
        timerCount--;
        
        timerElement.textContent = timerCount;
    }, 1000);
}


const questions = [
    {
        question: 'Commonly used git commands DO NOT include:',
        answers: [
            { text: 'Git copy', correct: true },
            { text: 'Git pull', correct: false },
            { text: 'Git init', correct: false },
            { text: 'Git add', correct: false }
        ]
    },
    {
        question: 'Which is the correct way to refer to an HTML class attribute in css?',
        answers: [
            { text: '#', correct: false },
            { text: '{}', correct: false },
            { text: '.', correct: true },
            { text: '=', correct: false }
        ]
    },
    {
        question: 'Arrays in Javascript can be used to store ______.',
        answers: [
            { text: 'Numbers & Strings', correct: false },
            { text: 'Other Arrays', correct: false },
            { text: 'Booleans', correct: false },
            { text: 'All of the Above', correct: true }
        ]
    },
    {
        question: '______ is a popular coding API',
        answers: [
            { text: 'inQuire', correct: false },
            { text: 'jQuery', correct: true },
            { text: 'Google Engine', correct: false },
            { text: 'Ball Python', correct: false }
        ]
    },
    {
        question: 'What elements are used to test for TRUE or False values stored in variables?',
        answers: [
            { text: 'Conditional Statements', correct: false },
            { text: 'Console.logs', correct: false },
            { text: 'Trigger Readers', correct: false },
            { text: 'Comparison and Logical Operators', correct: true }
        ]
    }
]
