import Ball from "./Ball.js"
import Paddle from "./Paddle.js"

//our elements
const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
const playerScoreElem = document.getElementById("player-score")
const computerScoreElem = document.getElementById("computer-score")

let lastTime
function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime
        // Update code
        ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()]) //pass in so ball bounces off paddle 
        //Computer paddle update function 
        computerPaddle.update(delta, ball.y)
        
        //adding hue color changes
        const hue = parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue("--hue")
        )
    
        document.documentElement.style.setProperty("--hue", hue + delta * 0.01)
    
        if (isLose()) handleLose() //this will trigger reset if we lose
      }
    
      lastTime = time
    //console.log(time)
    window.requestAnimationFrame(update) //it will call update everytime something on our screen is changing 
}

//Lose code for if our ball is out of bounds
function isLose() {
    const rect = ball.rect()
    return rect.right >= window.innerWidth || rect.left <= 0
  }
  
  function handleLose() {
    const rect = ball.rect()
    if (rect.right >= window.innerWidth) {
      playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1 //player has scored
    } else {
      computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1 //computer has scored
    }
    ball.reset()
    computerPaddle.reset()
  }
  
  //player paddle function 
  document.addEventListener("mousemove", e => {
    playerPaddle.position = (e.y / window.innerHeight) * 100
  })
  
  window.requestAnimationFrame(update)
