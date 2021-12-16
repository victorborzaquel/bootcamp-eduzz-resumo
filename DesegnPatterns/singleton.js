function Pessoa() {
  if (!Pessoa.instance) {
    Pessoa.instance = this
  }

  return Pessoa.instance
}

const p = Pessoa.call({name: 'Victor'})
const p2 = Pessoa.call({name: 'Hugo'})

console.log(p)
console.log(p2)