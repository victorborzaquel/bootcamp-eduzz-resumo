// File 1
let name = 'default'

function getName() {
  return name
}

function setName(newName) {
  name = newName
}

module.exports = {
  setName,
  getName
}

// File 2
const {setName,getName} = require('.')

console.log(getName())
setName('Hugo')
console.log(getName())