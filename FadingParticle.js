const GameObject = require('./GameObject')
const _ = require('lodash')

module.exports = class FadingParticle extends GameObject {
  constructor(args) {
    super(args)
    this.size = args.size
    this.color = args.color
    this.location = args.location
  }
  render() {

    ctx.fillStyle = this.color
    ctx.strokeStyle = this.color
    ctx.beginPath()
    ctx.arc(this.location.x, this.location.y, this.size, 0, 2 * Math.PI)
    ctx.fill()
    ctx.stroke()
  }
  update() {
   this.size = this.size * 0.9
   if (this.size < 0) {
     destroy(this)
   }
  }
}