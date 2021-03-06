const {
  getVelocity,
  getForce,
  getDrag,
} = require('./Physics')

module.exports = class GameObject {
  constructor({
    id,
    location = Vector2(0, 0),
    velocity = Vector2(0, 0),
    name = '',
    mass = 1,
    drag = 1,
    isGravity = false,
    rotation = 0,
  } = {}) {
    this.name = name
    this.location = location
    this.velocity = velocity
    this.mass = mass
    this.drag = drag
    this.isGravity = isGravity
    this.id = id
    this.rotation = rotation
  }
  render() {}
  update() {}
  updateGravity() {

    // const velocity = getVelocity((timeDelta / 1000), this.velocity)

    // // Force generated by the falling object when falling on earth
    // const internalForce = getForce(this.mass)
    // const dragForce = getDrag(this.velocity)

    // let acceleration = 0
    // if (internalForce > dragForce) {
    //   acceleration = (internalForce - dragForce) / this.mass
    // } else {
    //   acceleration = 0
    // }

    // const draggedVelocity = acceleration * (timeDelta / 1000)

    // this.velocity += draggedVelocity
    // this.y += this.velocity
  }
}