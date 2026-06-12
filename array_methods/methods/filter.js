// Filter()
// Cria um novo array com todos os elementos que passaram na condição

const words = ["JavaScript", "HTML", "CSS", "Web"]

// Filtrando palavra que tenham mais do que três letras
const result = words.filter((word) => word.length > 3)
console.log(result)

const products = [
    { description: "Teclado", price: 150, promotion: true },
    { description: "Mouse", price: 70, promotion: false },
    { description: "Monitor", price: 900, promotion: true },
]

// Exemplo de um filtro de produtos na promoção
const promotion = products.filter((product) => product.promotion === true)
console.log(promotion)

// Exemplo de um filtro de produtos menor que 100
const promotion2 = products.filter((product) => product.price < 100)
console.log(promotion2)
