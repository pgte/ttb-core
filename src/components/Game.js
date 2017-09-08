'use strict'

const createStore = require('redux').createStore

const Map = require('./Map')
const Player = require('./Player')

module.exports = createGame

const reducers = {
  'arming': require('../game-stages/arming')
}

function createGame (options) {
  return new Game(options)
}

/* Game */
class Game {
  constructor (options) {
    if (typeof options !== 'object') {
      throw new Error('need game options object')
    }

    // Map
    const map = new Map(options.map)

    // Players
    if (!Array.isArray(options.players)) {
      throw new Error('need players array')
    }
    const players = this._players = options.players.map((player) => new Player(player))

    // Store
    this.store = createStore(reduce, initialState(map, players))
  }

  dispatch (action) {
    return this.store.dispatch(action)
  }

  player (index) {
    return this._players[index]
  }
}

/* Initial State */
function initialState (map, players) {
  return {
    stage: 'arming',
    map: map,
    players: players
  }
}

/* Reduce */
function reduce (state, action) {
  const reduce = reducers[state.stage]
  if ((typeof reduce) !== 'function') {
    throw new Error('unknown stage ' + state.stage)
  }

  return reduce(state, action)
}
