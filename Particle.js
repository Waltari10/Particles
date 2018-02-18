const GameObject = require('./GameObject')
const FadingParticle = require('./FadingParticle')
const _ = require('lodash')
const {
  getForce,
  getDrag,
  getVelocity,
  getPosOnCircle
} = require('./Physics')

module.exports = class Particle extends GameObject {
  constructor(args) {
    super(args)
    this.progress = (Math.random() * 2) -1
    this.center = pressLocation
    this.radius = _.random(20, canvas.height / 3 )
    this.target = getPosOnCircle(this.radius, Math.PI * this.progress, this.center)
    this.size = (Math.random() * 8) + 2
    this.color = this.getRandomColor()
    this.speed = Math.random() / 100 + 0.01
  }
  render() {

    ctx.fillStyle = this.color
    ctx.strokeStyle = this.color
    ctx.arc(this.location.x, this.location.y, this.size , 0, 2 * Math.PI)
    ctx.fill()
  }
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  update() {
    this.center = pressLocation

    this.progress = this.progress + this.speed
    if (this.progress > 1) {
      this.progress = -1
    }
    this.target = getPosOnCircle(this.radius, Math.PI * this.progress, this.center)

    let differenceVector = Vector2(this.target.distanceX(this.location), this.target.distanceY(this.location))

    differenceVector = differenceVector.divide(new Vector2(10, 10))

    this.location = this.location.add(differenceVector)

    instantiate(FadingParticle, {
      location: this.location.clone(),
      size: this.size,
      color: this.color
    })
  }
}