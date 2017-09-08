'use strict'

module.exports = (state, action) => {
  switch (action.type) {
    case 'ARM':
      const player = state.players[action.playerIndex]
      if (!player) {
        throw new Error('invalid player index in action: ' + action.playerIndex)
      }

      const actor = player.actors[action.actorIndex]
      if (!actor) {
        throw new Error('invalid actor index in action: ' + action.actorIndex)
      }

      actor.arm(action.arm)
      break
  }
  return state
}
