let message = "Estou estudando os fundamentos do JavaScript."

console.log(message)

// Substituindo parte de um texto
console.log(message.replace("JavaScript", "HTML"))
console.log(message)

// Extraindo uma parte da string (start, end)
console.log(message.slice(0, 5))

// Extraindo uma parte da string de trás pra frente
console.log(message.slice(-11))

let textWithSpace = "       Texto de exemplo     "
console.log(textWithSpace.length)

// Remove espaços em branco no inicio e fim
console.log(textWithSpace.trim().length)
