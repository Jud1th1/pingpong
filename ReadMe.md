# Ping Pong 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)


## Overview
Created a ping pong game with Javascript

### The challenge

Users should be able to:

-  Play Ping Pong against the computer 



### Screenshot

![](./Screenshot.png)

### Links

- Solution URL: https://github.com/Jud1th1/pingpong
- Live Site URL: https://spontaneous-pingpong.netlify.app/

## My process
-	I built this Ping Pong game following along with a Youtube tutorial from Web Dev Simplified. We started off with the HTML and some CSS basics for the layout of our game. The interchanging background colors was done with Javascript so the majority of this project was done there. 
-	We created a main JS file that setup our game logic and two other files one for the ball and one for the paddle code. 
-	The game consists of a ball and two paddles, one controlled by the player and the other by the computer. We used a requestAnimationFrame to update the game state and draw the game elements to the screen. The ball and paddles are defined as classes with various methods for updating their state and position on the screen. The game logic includes functions for detecting collisions between the ball and paddles, updating the ball's position and velocity, and keeping score.
-	The update function is called on each frame and includes code to update the ball's position, the computer paddle's position, and the background color. It also checks for a loss condition (if the ball goes out of bounds) and calls the handleLose function if necessary. The isLose function checks if the ball has gone out of bounds, and handleLose updates the score and resets the ball and computer paddle to their starting positions. There is also a listener on the document for mousemove events, which updates the position of the player's paddle based on the mouse's y-coordinate.
-	Once we were finished I wanted to try my hands at adding more features such as a game over element where the game would end after the player or the computer reaches 11 points and there would be a pop that says “You Won!” or “Sorry, You Lost” and would you like to play again to restart the game but this proved MANY challenges. For one, I would either be successful in the game stopping after 11 but no pop up would appear and the game would automatically restart with no indication of a winner. When I fixed the pop-up I somehow lost control of the player’s mouse and the player would win the game by default within 2 seconds. And when I attempted to fix the bugs the game wouldn’t start at all. So this is where my continued development lies. Step 8 of my JS notes shows the code I tried to implement. 



### Built with

- HTML
- CSS 
- Javascript

### What I learned

-	How to build a simple Ping Pong game with Javascript as well as how to incorporate multiple files in JS.

### Continued development
-	I would like to try again to learn how to stop the game and restart. I may revisit my BlackJack game where some of these elements were present

### Useful resources

- https://www.youtube.com/watch?v=PeY6lXPrPaA&t=2s //YouTube Tutorial
- w3schools 

