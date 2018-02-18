const GameObject = require('./GameObject')
const FadingParticle = require('./FadingParticle')
const _ = require('lodash')
const {
  getForce,
  getDrag,
  getVelocity,
  getPosOnCircle
} = require('./Physics')

const { MIN_PARTICLE_SIZE, SIZE_MODIFIER } = require('./constants')

module.exports = class Particle extends GameObject {
  constructor(args) {
    super(args)
    this.progress = (Math.random() * 2) -1
    this.center = pressLocation
    this.radius = _.random(20, canvas.height / 2 )
    this.target = getPosOnCircle(this.radius, Math.PI * this.progress, this.center)
    this.size = (Math.random() * 8) + 2
    this.color = this.getRandomColor()
    this.speed = Math.random() / 100 + 0.01
    this.divisionVector = Vector2(10, 10) 

    this.trail = []


    this.trailLength = 1
    for (let k = this.size; k > MIN_PARTICLE_SIZE; k = k * SIZE_MODIFIER) {
       this.trailLength++
    }
  }
  render() {
    ctx.fillStyle = this.color
    ctx.strokeStyle = this.color
    ctx.arc(Math.floor(this.location.x), Math.floor(this.location.y), this.size , 0, 2 * Math.PI)
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

    if (!this.diffVector) {
      this.diffVector = Vector2(this.target.distanceX(this.location), this.target.distanceY(this.location))
    } else {
      this.diffVector.x = this.target.distanceX(this.location)
      this.diffVector.y = this.target.distanceY(this.location)
    }

    this.diffVector = this.diffVector.divide(this.divisionVector)

    this.location = this.location.add(this.diffVector)

    if (this.location.x < 0) {
      this.location.x = 0
    }

    if (this.location.y < 0) {
      this.location.y = 0
    }

    if (this.location.x > canvas.width) {
      this.location.x = canvas.width
    }

    if (this.location.y > canvas.height) {
      this.location.y = canvas.height
    }



    if (this.trailLength > 0) {
      this.trailLength--
      this.trail.push(instantiate(FadingParticle, {
        location: this.location.clone(),
        parentLocation: this.location,
        size: this.size,
        color: this.color
      }))
    } 

  }
}