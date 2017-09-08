'use strict'

const arms = {
  'machine gun': {
    ammo: 30
  }
}

module.exports = class Arm {
  constructor (armType) {
    let arm = arms[armType]
    if (!arm) {
      throw new Error('Unknown arm type: ' + armType)
    }

    this.name = armType
    this.ammo = arm.ammo
  }

  toJSON () {
    return {
      name: this.name,
      ammo: this.ammo
    }
  }
}
