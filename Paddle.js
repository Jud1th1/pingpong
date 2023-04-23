const SPEED = 0.02 // speed for computer paddle 

export default class Paddle {
  constructor(paddleElem) {
    this.paddleElem = paddleElem
    this.reset()
  }

  //Getter and Setter for position 
  get position() {
    return parseFloat(
      getComputedStyle(this.paddleElem).getPropertyValue("--position")
    )
  }

  set position(value) {
    this.paddleElem.style.setProperty("--position", value)
  }

  //rect function for our paddles 
  rect() {
    return this.paddleElem.getBoundingClientRect()
  }

  reset() {
    this.position = 50
  }

  //Paddle for Computer
  update(delta, ballHeight) {
    this.position += SPEED * delta * (ballHeight - this.position) //add speed so the computer doesn't win by default since our paddle and position are the same here
  }
}

