'use strict'

import Map from './Map'

module.exports = createGame

function createGame (options) {
  return new Game(options)
}

class Game {
  constructor (options) {
    this.map = new Map(options.map)
  }
}
