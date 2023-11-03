const intro = document.getElementById('intro')
const startButton = document.getElementById('startBTN')
const nextButton = document.getElementById('nextBTN')
const questionContainerElement = document.getElementById('qCard')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answerBTNs')
var timerElement = document.querySelector(".timer-text");

let shuffledQuestions, currentQuestionIndex
var timer;
var timerCount;


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
    timerCount = 60;
  intro.classList.add('hide')
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  startTimer()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}


function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      console.log(timerCount);
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