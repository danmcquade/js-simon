let theLeaderboard = document.querySelector('.leaderboard')
let highScores
let topScores = []

// Configuration parameters for our database
var config = {
  apiKey: 'AIzaSyDVwC1GiF5PThbFlK2kAwYGNbC26fz8j7Y',
  authDomain: 'js-simon.firebaseapp.com',
  databaseURL: 'https://js-simon.firebaseio.com',
  projectId: 'js-simon',
  storageBucket: 'js-simon.appspot.com',
  messagingSenderId: '157497963273'
}

// Initialize Firebase
firebase.initializeApp(config)

let database = firebase.database().ref()

// Pull high scores from the database
database.on('value', (snapshot) => {
  highScores = snapshot.val()
  topScores = highScores.HighScores
  topScores.shift()
  populateLeaderboard()
})

// Populate the leaderboard on the page with the top high score
function populateLeaderboard () {
  let highScoreName = document.querySelector('.highscorename')
  let highScoreNum = document.querySelector('.highscorenum')
  highScoreName.innerHTML = topScores[0].name
  highScoreNum.innerHTML = topScores[0].score
  theLeaderboard.style.display = 'flex'
}
