'use strict'

const Actor = require('./Actor')

module.exports = class Player {
  constructor (options) {
    const name = options.name || options

    if (typeof name !== 'string') {
      throw new Error('player name should be string')
    }

    this.name = name

    /* Actors */
    if (!Array.isArray(options.actors)) {
      throw new Error('player needs actors array')
    }
    this.actors = options.actors.map((actor) => new Actor(actor))
  }

  actor (index) {
    return this.actors[index]
  }
}
