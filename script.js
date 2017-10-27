const red = document.querySelector('.red')
const green = document.querySelector('.green')
const blue = document.querySelector('.blue')
const yellow = document.querySelector('.yellow')
const theButtons = [red, green, blue, yellow]
const startButton = document.getElementById('startgame')
const resetButton = document.getElementById('resetgame')
const banner = document.querySelector('.message')
const score = document.querySelector('.score')
let solution = []
let mySolution = []
let theScore = 0
let gameOver = true
let solutionPlaying = false
let timeout = 650

document.querySelector('.buttons').addEventListener('click', (e) => {
  if (!solutionPlaying) {
    playMove(e.target)
    if (!gameOver) {
      mySolution.push(parseInt(e.target.dataset.id))
      checkSolution()
    }
  }
})

startButton.addEventListener('click', () => {
  if (gameOver) {
    resetGame()
    gameOver = false
    generateSolution()
  }
})

resetButton.addEventListener('click', () => {
  if (!solutionPlaying) {
    resetGame()
  }
})

function resetGame () {
  banner.innerHTML = 'JS-Simon'
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
  setTimeout(() => {
    button.classList.remove('press')
  }, 300)
}

function generateSolution () {
  banner.innerHTML = 'JS-Simon'
  solution.push(Math.floor((Math.random() * 4) + 1))
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
    setTimeout(() => {
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
  solutionPlaying = true
  for (let z = 0; z < mySolution.length; z++) {
    if (mySolution[z] !== solution[z]) {
      failed = true
      banner.innerHTML = 'Sorry!'
      setTimeout(() => {
        new Audio('sounds/fail.mp3').play()
      }, 700)
      setTimeout(introAnimation, 500)
      setTimeout(resetGame, 3000)
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
  solutionPlaying = false
}

function updateScore () {
  if (theScore < 10) {
    score.innerHTML = '0' + theScore
  } else {
    score.innerHTML = theScore
  }
}

introAnimation()
