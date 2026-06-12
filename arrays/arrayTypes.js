// Demonstra que arrays em JavaScript podem armazenar diferentes tipos: string, número, booleano, função e objeto.
  "Um texto",
  10,
  true,
  function () {
    console.log("Função no Array")
  },
  { 
    name: "Rodrigo",
    email: "Rodrigo@"
  },
]

// Texto 
console.log(myArray[0])

// Número 
console.log(myArray[1])

// Booleano 
console.log(myArray[2])

// Função
myArray[3]()

// Objeto
console.log(myArray[4].name, myArray[4].email)
