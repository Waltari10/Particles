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
      pressLocation.x = e.x
      pressLocation.y = e.y
    }
  }
  mouseDown(e) {
    pressLocation.x = e.x
    pressLocation.y = e.y
    this.hold = true
  }
  mouseUp() {
    this.hold = false
  }
}