'use strict'

const fs = require('fs')
const join = require('path').join

exports.maps = {
  load: (name) => {
    return fs.readFileSync(join(__dirname, 'maps', `${name}.txt`), 'utf8')
  }
}
