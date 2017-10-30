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

// Listen for 'click' evnents on the game buttons
document.querySelector('.buttons').addEventListener('click', (e) => {
  if (e.target.classList.contains('button')){
    if (!solutionPlaying) {
      playMove(e.target)
      if (!gameOver) {
        mySolution.push(parseInt(e.target.dataset.id))
        checkSolution()
      }
    }
  }
})

// Listen for 'click' evnents on the 'start' button
startButton.addEventListener('click', (e) => {
  if (gameOver) {
    resetGame()
    gameOver = false
    generateSolution()
  }
  e.preventDefault()
})

// Listen for 'click' events on the 'reset' button
resetButton.addEventListener('click', (e) => {
  if (!solutionPlaying) {
    resetGame()
  }
  e.preventDefault()
})

// Reset the game
function resetGame () {
  banner.innerHTML = 'JS-Simon'
  gameOver = true
  solution = []
  mySolution = []
  theScore = 0
  timeout = 650
  updateScore()
}

// Animate the individual buttons when clicked
function playMove (button) {
  button.classList.add('press')
  new Audio(button.dataset.sound).play()
  setTimeout(() => {
    button.classList.remove('press')
  }, 300)
}

// Generate a new move and add it to the solution
function generateSolution () {
  banner.innerHTML = 'JS-Simon'
  solution.push(Math.floor((Math.random() * 4) + 1))
  timeout -= 25
  animateSolution()
}

// Animate the whole solution for the user to see
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

// Animate each button on the board
function flashButtons () {
  theButtons.forEach((button) => {
    button.classList.add('press')
    setTimeout(() => {
      button.classList.remove('press')
    }, 300)
  })
}

// Flash the board 3 times
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

// Check the user's solution against the game-generated solution
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
      setTimeout(checkHighScore, 3000)
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

// Update the scorebaord text on the page
function updateScore () {
  if (theScore < 10) {
    score.innerHTML = '0' + theScore
  } else {
    score.innerHTML = theScore
  }
}

// Check with the database to see if there is a new high score, and if so, write the new data
function checkHighScore () {
  if (theScore > topScores[0].score) {
    let newName = window.prompt('You earned a new high score! Enter your name for the leaderboard:')
    firebase.database().ref('HighScores/1').set({
      name: newName,
      score: theScore
    })
  }
}

// Run the intro animation (flash the board 3 times)
introAnimation()
