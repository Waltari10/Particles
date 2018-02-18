const GameObject = require('./GameObject')
const _ = require('lodash')

module.exports = class HoldListener extends GameObject {
  constructor(args) {
    super(args)
    this.hold = false
    global.pressLocation = Vector2(canvas.width / 2, canvas.height / 2)

    this.mouseDown = this.mouseDown.bind(this)
    this.mouseUp = this.mouseUp.bind(this)
    this.mouseMove = this.mouseMove.bind(this)

    canvas.addEventListener("mousedown", this.mouseDown)
    canvas.addEventListener("mouseup", this.mouseUp)
    canvas.addEventListener("mousemove", this.mouseMove)
  }
  mouseMove(e) {
    if (this.hold) {
      global.pressLocation = Vector2(e.x, e.y)
    }
  }
  mouseDown(e) {
    global.pressLocation = Vector2(e.x, e.y)
    this.hold = true
  }
  mouseUp(e) {
    this.hold = false
  }
}