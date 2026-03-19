const product = {
  name: "Teclado",
  quantity: 100,
}

// Acessando a proprietades do objeto
console.log(product.name)
console.log(product.quantity)

// Atualizando o valor de uma propriedade
product.name = "mouse"
console.log(product.name)

product.quantity = 90
console.log(product.quantity)

// Notação de colchetes 
product["quantity"] = 50
console.log(product)
