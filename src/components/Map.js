'use strict'

class Map {
  constructor (options) {
    const map = options && options.map || options

    if (!map || (typeof map) !== 'string') {
      throw new Error('invalid map type, which should be a string')
    }

    this._map = parseMap(map)
  }
}

module.exports = Map

function parseMap (map) {
  return map.split('\n').map((line) => line.trim()).filter((line) => !!line)
}
