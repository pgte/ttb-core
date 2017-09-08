'use strict'

/* global it, expect */

const Map = require('./Map')

it('needs a map', () => {
  expect(() => new Map()).toThrow('invalid map type, which should be a string')
  expect(() => new Map({})).toThrow('invalid map type, which should be a string')
  expect(() => new Map({map: ''})).toThrow('invalid map type, which should be a string')
})

it('accepts a map string as argument', () => {
  const map1 = new Map(createMapString())
  expect(map1).toBeInstanceOf(Map)
  const map2 = new Map({map: createMapString()})
  expect(map2).toBeInstanceOf(Map)
})

function createMapString () {
  return `
╔═══════════════╗
║               ║
║               ║
║               ║
║               ║
║               ║
║               ║
║               ║
║               ║
║               ║
╚═══════════════╝`
}
