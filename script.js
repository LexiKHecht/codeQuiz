const intro = document.getElementById('intro')
const startButton = document.getElementById('startBTN')
const nextButton = document.getElementById('nextBTN')
const questionContainerElement = document.getElementById('qCard')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answerBTNs')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  intro.classList.add('hide')
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}