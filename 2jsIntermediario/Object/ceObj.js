// Criar um objeto vazio
const obj = {}

// Criar um objeto com propriedades e métodos
const user = {
  email: "rodrigo@email.com",
  age: 18,
  name: {
    first_name: "Rodrigo",
    surname: "Gonçalves"
  },
  address: {
    street: "Rua X",
    number: 23,
    city: "São Paulo",
    postal_code: "12345-123"
  },
  message: function() {
    console.log("Oi Rodrigo")
  },
}

// Acessando propriedade e métodos usando a notação de ponto
console.log(user.email)

// Acessando propriedade de objeto
console.log(user.name.first_name)

// Executando o método do objeto
user.message()

// Notação de colchetes
console.log(user["email"])
console.log(user["name"]["first_name"])
user["message"]()
