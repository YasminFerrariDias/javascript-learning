// Spread (espalhar) permite que um objeto iterável, 
// como uma expressão de array ou uma string sejá 
// expandido para ser usado onde zero ou mais argumentos

console.log("SPREAD - espalhar as informações")
const numbers = [1, 2, 3]
console.log(numbers)

// Spread
console.log(...numbers)

const data = [
  {
    name: "Rodrigo",
    email: "Rodrigo@email.com",
    avatar: "r.png",
  },
  {
    name: "João",
    email: "Joao@email.com",
    avatar: "j.png",
  }
]

console.log(data)

// Utilizando o spread no array com objetos
console.log(...data)
