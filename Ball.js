const INITIAL_VELOCITY = 0.025
const VELOCITY_INCREASE = 0.00001

export default class Ball {
    constructor(ballElem) {
      this.ballElem = ballElem
      this.reset() //allow us to set properties (velocity & direction)
    }  //ball is being passed through here so we can use and interact with it in our code

    //helper function 
    // position 
    get x() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"))
      }
    
    set x(value) {
        this.ballElem.style.setProperty("--x", value)
      }

    get y() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"))
      }
    
    set y(value) {
        this.ballElem.style.setProperty("--y", value)
      }
    
    //function to help bounce off top and bottom of screen (adding for the update area)
    rect() {
        return this.ballElem.getBoundingClientRect()
      }

    //velocity & direction 
    reset() {
        this.x = 50
        this.y = 50
        this.direction = { x: 0 }
        while (
        Math.abs(this.direction.x) <= 0.2 ||
        Math.abs(this.direction.x) >= 0.9
        ) {
        const heading = randomNumberBetween(0, 2 * Math.PI)
        this.direction = { x: Math.cos(heading), y: Math.sin(heading) }
        }
        this.velocity = INITIAL_VELOCITY //our velocity & set at top of file
    }


    update(delta, paddleRects) { //bounce off the paddle 
    //we need to update our position by adding the velocity and direction (use helper function above)
        this.x += this.direction.x * this.velocity * delta //* delta to help with timing/delays
        this.y += this.direction.y * this.velocity * delta
        this.velocity += VELOCITY_INCREASE * delta
        //bounce from top and bottom
        const rect = this.rect()

        if (rect.bottom >= window.innerHeight || rect.top <= 0) {
        this.direction.y *= -1
        }

        //loops through paddle rectangles until true (helping the ball bounce off the paddle)
        if (paddleRects.some(r => isCollision(r, rect))) {
        this.direction.x *= -1
        }
    }
    }

    //random number function for our direction 
    function randomNumberBetween(min, max) {
        return Math.random() * (max - min) + min
    }
  
    //function for paddle collision 
    function isCollision(rect1, rect2) {
        return (
        rect1.left <= rect2.right &&
        rect1.right >= rect2.left &&
        rect1.top <= rect2.bottom &&
        rect1.bottom >= rect2.top
        )
    }

