const Particle = require('./Particle')
const HoldListener = require('./HoldListener')
const FadingParticle = require('./FadingParticle')

function createScene () {
  instantiate(HoldListener)
  let i = 25
  while (i--) {
    instantiate(Particle, {
      center: Vector2(400, 400),
    })
  }
}

module.exports = {
  createScene
}