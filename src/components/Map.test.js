'use strict'

const Map = require('./Map')

it('needs a map', () => {
  expect(() => new Map()).toThrow('invalid map type, which should be a string')
  expect(() => new Map({})).toThrow('invalid map type, which should be a string')
  expect(() => new Map({map: ''})).toThrow('invalid map type, which should be a string')
})

it('accepts a map string as argument', () => {
  const map1 = new Map(createMapString())
  const map2 = new Map({map: createMapString() })
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