// Demonstra o uso do this para referenciar o próprio objeto dentro de um método.
const user = {
  name: "João",
  message: function() {
    console.log(`Oi ${user.name}`)
  },
}

user.message()

// Utilizando o THIS para chamar objeto
const user2 = {
  name: "Rodrigo",
  message: function() {
    console.log(`Oi ${this.name}`)
  },
}

user.message()
