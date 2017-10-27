# JS-Simon
A web-based version of the classic game Simon in HTML/CSS/JS

![JS-Simon Game Screenshot](https://raw.githubusercontent.com/danmcquade/js-simon/master/images/preview.png "JS-Simon Game Screenshot")

## Technologies used
JS-Simon is created using HTML, CSS and vanilla JavaScript. The game utilizes a cloud-based database hosted on Google's Firebase platform to store high scores. Project assets consist of PNG images to draw the game board, and MP3 files for the game sounds.

## Approach Taken / Features
The initial approach taken when creating the game was to start simple, and then gradually add features along the way. The first step was to come up with a design for the game board, and to then get the design implemented on the page using HTML and CSS. The next step was to begin putting the building blocks of code in place. The basic features required for the game to function were:

- Having a 'Start' button to begin the game
- Generating a random solution for the user to follow
- Displaying the solution to the user (animating the buttons)
- Monitoring the game buttons for 'click' events
- Animating the buttons to 'light up' when clicked
- Comparing the buttons pressed to the generated solution
- Keeping track of the score

With these basics in place, more advanced features could be added to improve the functionality of the game. Some of these advanced features which were implemented later in the development stage include:

- Adding sounds which play when a button is pressed or a wrong move is made
- Adding an intro animation to play when the game is loaded
- Speeding up the playback of the solution as the game progresses
- Implementing a cloud-based database to store the high score(s)

## Installation Instructions
JS-Simon is a browser-based game. It can be forked and cloned for local playback, or it can be played on the web at:

[https://danmcquade.github.io/js-simon/](https://danmcquade.github.io/js-simon/])
