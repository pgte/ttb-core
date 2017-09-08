'use strict'

const Arm = require('./Arm')

const defaultOptions = {
  maxArms: 3
}

module.exports = class Actor {
  constructor (_options) {
    let options = _options
    if (typeof options === 'string') {
      options = {
        name: options
      }
    }

    options = this.options = Object.assign({}, defaultOptions, options)

    /* Name */
    const name = options.name

    if ((typeof name) !== 'string') {
      throw new Error('actor name should be string')
    }

    this.name = name
    this._arms = []
  }

  arm (armName) {
    if (this._arms.length === this.options.maxArms) {
      throw new Error('cannot carry more arms')
    }
    this._arms.push(new Arm(armName))
  }

  get arms () {
    return this._arms.map((arm) => arm.toJSON())
  }
}
