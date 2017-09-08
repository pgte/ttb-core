'use strict'

/* global it, expect */

const Game = require('./Game')

it('needs a map', () => {
  expect(() => new Game()).toThrow('need game options object')
  expect(() => new Game({})).toThrow('invalid map type, which should be a string')
  expect(() => new Game({map: ''})).toThrow('invalid map type, which should be a string')
})

it('needs players', () => {
  expect(() => new Game({
    map: 'ABC'
  })).toThrow('need players array')
})

it('needs actors', () => {
  expect(() => new Game({
    map: 'ABC',
    players: [ 'player 1', 'player 2' ]
  })).toThrow('player needs actors array')
})
