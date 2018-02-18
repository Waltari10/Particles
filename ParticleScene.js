const Particle = require('./Particle')
const HoldListener = require('./HoldListener')

function createScene () {
  instantiate(HoldListener)

  let i = 500
  while (i--) {
    instantiate(Particle, {
      center: Vector2(400, 400),
    })
  }
}

module.exports = {
  createScene
}