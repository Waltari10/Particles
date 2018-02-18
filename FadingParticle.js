const GameObject = require('./GameObject')
const _ = require('lodash')

const { MIN_PARTICLE_SIZE, SIZE_MODIFIER } = require('./constants')

module.exports = class FadingParticle extends GameObject {
  constructor(args) {
    super(args)
    this.size = args.size
    this.originalSize = args.size
    this.color = args.color
    this.location = args.location
    this.parentLocation = args.parentLocation
  }
  render() {
    ctx.fillStyle = this.color
    ctx.strokeStyle = this.color
    ctx.arc(Math.floor(this.location.x), Math.floor(this.location.y), this.size, 0, 2 * Math.PI)
  }
  update() {
    this.size = this.size * SIZE_MODIFIER
    if (this.size < MIN_PARTICLE_SIZE) {
      this.location = this.parentLocation.clone()
      this.size = this.originalSize
    }
  }
}