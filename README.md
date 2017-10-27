# JS-Simon
A web-based version of the classic game Simon in HTML/CSS/JS. Playable version at:

[https://danmcquade.github.io/js-simon/](https://danmcquade.github.io/js-simon/)

![JS-Simon Game Screenshot](https://danmcquade.github.io/js-simon/images/preview.png "JS-Simon Game Screenshot")

## Technologies used
JS-Simon was created using HTML, CSS and vanilla JavaScript. The game utilizes a database hosted on Google's Firebase platform to store high scores. Project assets consist of PNG images to draw the game board, and MP3 files for the game sounds.

## Approach Taken / Features
The initial approach taken when creating the game was to start simple, and then gradually add features along the way. The first step was to come up with a design for the game board, and to then get the design implemented on the page using HTML and CSS. The next step was to begin putting the code into place. The basic features required for the game to function were:

- Having a 'Start' button to begin the game
- Generating a random solution for the user to follow
- Displaying the solution to the user (animating the buttons)
- Monitoring the game buttons for 'click' events
- Animating the buttons to 'light up' when clicked
- Comparing the buttons pressed to the generated solution
- Keeping track of the score

With these basics in place, more advanced features were then added to improve and enhance the functionality of the game. Some of these advanced features which were implemented later in the development process included:

- Adding sounds which play when a button is pressed or a wrong move is made
- Adding an intro animation to play when the game is loaded
- Speeding up the playback of the solution as the game progresses
- Implementing database functionality to store the high score(s)

## Installation Instructions
JS-Simon is a browser-based game. It can be forked and cloned for local playback, or it can be played on the web at:

[https://danmcquade.github.io/js-simon/](https://danmcquade.github.io/js-simon/)

## Known Issues
Under Safari 11.0+ (and possibly older versions), Safari's built-in auto-play prevention mechanisms can prevent some of the sound effects from playing while the game is in progress. This can be solved by adding an 'Allow All Auto-Play' exception for the game URL in Safari's Preferences under Websites -> Auto-Play.    
