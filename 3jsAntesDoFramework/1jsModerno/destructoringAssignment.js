// Destructuring assignment - desestruturação
// Permite extrair dados de arrays ou objetos em variáveis distintas

console.log("DESESTRUTURAÇÃO")
console.log("1 - ARRAY")
const data = ["Rodrigo Gonçalves", "rodrigo@email.com"]

// Desestruturando array
const [username, email] = data
console.log("Nome:", username)
console.log("Email:", email)

const fruits = ["Banana", "Apple", "Orange"]

// Desestruturar somente o primeiro 
const [banana] = fruits
console.log(banana)

// Ignorando o primeiro na desestruturação
const [_, apple] = fruits
console.log(apple)

// Ignorando o primeiro e o segundo na desestruturação 
const [, , orange] = fruits
console.log(orange)

console.log("2 - OBJETO")
const product = {
  description: "Teclado",
  price: 150 
}

const { description, price } = product 
console.log("Descrição:", description)
console.log("Preço: R$", price)

// Precisa seguir a mesma ordem
function newProduct(description, price) {
  console.log("### NOVO PRODUTO ###")
  console.log("Descrição:", description)
  console.log("Preço: R$", price)
}

newProduct ("Mouse", 70)

// Não importa a ordem
function newProduct2({price, description}) {
  console.log("### NOVO PRODUTO ###")
  console.log("Descrição:", description)
  console.log("Preço: R$", price)
}

newProduct2 ({
  description: "Mouse",
  price: 70
})
