'use strict'

/* global describe, beforeAll, it, expect */

const fixtures = require('../fixtures')

const Game = require('../src/components/Game')

describe('game', () => {
  let game

  beforeAll(() => {
    game = Game({
      map: fixtures.maps.load('map1'),
      players: [
        {
          name: 'player 1',
          actors: [ 'actor 1.1' ]
        },
        {
          name: 'player 2',
          actors: [ 'actor 2.1' ]
        }
      ]
    })
  })

  describe('arming', () => {
    it('can arm actor', () => {
      game.dispatch({ type: 'ARM', playerIndex: 0, actorIndex: 0, arm: 'machine gun' })
      expect(game.player(0).actor(0).arms).toEqual([{
        name: 'machine gun',
        ammo: 30
      }])
    })
  })
})
