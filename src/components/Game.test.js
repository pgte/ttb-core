'use strict'

/* global it, expect */

const Game = require('./Game')

it('needs a map', () => {
  expect(() => new Game()).toThrow('invalid map type, which should be a string')
  expect(() => new Game({})).toThrow('invalid map type, which should be a string')
  expect(() => new Game({map: ''})).toThrow('invalid map type, which should be a string')
})
