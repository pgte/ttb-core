'use strict'

class Map {
  constructor (options) {
    const map = (options && options.map) || options

    if (!map || (typeof map) !== 'string') {
      throw new Error('invalid map type, which should be a string')
    }

    const parsedMap = parseMap(map)
    validateMap(parsedMap)

    this._map = parsedMap
  }

  get height () {
    return this._map.length
  }

  get width () {
    return this._map[0].length
  }
}

module.exports = Map

function parseMap (map) {
  return map.split('\n').map((line) => line.trim()).filter((line) => !!line)
}

function validateMap (map) {
  validateMapLineLength(map)
}

function validateMapLineLength (map) {
  const width = map[0].length
  if (!map.every((line) => line.length === width)) {
    throw new Error('all map lines should have the same length')
  }
}
