### Transforma em array
Array.from()

### Cortar o Array
arr.slice(0, 2)  // deixar   
arr.slice(-3)  
arr.slice(3)

arr.splice(0, 2) // remover

### Mudando profundidade
const arr = [1, 2, [3, 4]]

arr.flat()  // arr = [1, 2, 3, 4]


### Map mudando Profundidade
const arr = [1, 2, 3, 4]

arr.flatMap(value => [value * 2]) // [2, 4, 6, 8]

### ler array em etapas
arr.next() // {value: curr, done: boolean}