// Demonstra como encontrar a posição de um elemento e removê-lo com indexOf e splice.
let fruits = ["Apple", "Watermelon", "Lemon", "Strawberry"]

let position = fruits.indexOf("Lemon")
console.log(position)

// Remove o item pela posição
fruits.splice(position,1)
console.log(fruits)
