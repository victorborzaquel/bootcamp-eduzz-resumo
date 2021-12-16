let loggedIn = false

function authenticate(fn) {
  return !!loggedIn && fn()
}

function sum(a, b) {
  return a + b
}

function sumAuthenticate(a, b) {
  return authenticate(() => sum(a, b))
}

console.log(sumAuthenticate(1, 2))

loggedIn = true

console.log(sumAuthenticate(1, 2))