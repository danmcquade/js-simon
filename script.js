const red = document.querySelector('.red')
const green = document.querySelector('.green')
const blue = document.querySelector('.blue')
const yellow = document.querySelector('.yellow')
const theButtons = [red, green, blue, yellow]
const startButton = document.querySelector('.startgame')
const resetButton = document.querySelector('.resetgame')
const banner = document.getElementsByTagName('h1')[0]
const score = document.querySelector('.score')
let solution = []
let mySolution = []
let theScore = 0
let gameOver = true
let solutionPlaying = false
let timeout = 650

document.querySelector('.buttons').addEventListener('click', (x) => {
  if (!solutionPlaying) {
    playMove(x.target)
    if (!gameOver) {
      mySolution.push(parseInt(x.target.dataset.id))
      checkSolution()
    }
  }
})

startButton.addEventListener('click', (x) => {
  resetGame()
  gameOver = false
  generateSolution()
})

resetButton.addEventListener('click', () => {
  resetGame()
})

function resetGame () {
  gameOver = true
  solution = []
  mySolution = []
  theScore = 0
  timeout = 650
  updateScore()
}

function playMove (button) {
  button.classList.add('press')
  new Audio(button.dataset.sound).play()
  setTimeout(function () {
    button.classList.remove('press')
  }, 300)
}

function generateSolution () {
  banner.innerHTML = 'JS-Simon'
  solution.push(Math.floor((Math.random() * 4) + 1))
  console.log(`Solution is: ${solution}`)
  timeout -= 25
  animateSolution()
}

function animateSolution () {
  let x = 0
  solutionPlaying = true
  let theMove = setInterval(() => {
    playMove(theButtons[solution[x] - 1])
    x++
    if (x >= solution.length) {
      clearInterval(theMove)
      solutionPlaying = false
    }
  }, timeout)
}

function flashButtons () {
  theButtons.forEach((button) => {
    button.classList.add('press')
    setTimeout(function () {
      button.classList.remove('press')
    }, 300)
  })
}

function introAnimation () {
  let x = 0
  let flash = setInterval(() => {
    flashButtons()
    x++
    if (x >= 3) {
      clearInterval(flash)
    }
  }, 500)
}

function checkSolution () {
  let failed = false
  for (let z = 0; z < mySolution.length; z++) {
    if (mySolution[z] !== solution[z]) {
      failed = true
      banner.innerHTML = 'Sorry!'
      setTimeout(() => {
        new Audio('sounds/fail.mp3').play()
      }, 700)
      setTimeout(introAnimation, 500)
      resetGame()
    }
  }
  if (mySolution.length >= solution.length && failed !== true) {
    if (mySolution.toString() === solution.toString()) {
      theScore++
      updateScore()
      banner.innerHTML = 'Good!'
      setTimeout(generateSolution, 1000)
    }
    mySolution = []
    failed = false
  }
}

function updateScore () {
  if (theScore < 10) {
    score.innerHTML = '0' + theScore
  } else {
    score.innerHTML = theScore
  }
}

introAnimation()