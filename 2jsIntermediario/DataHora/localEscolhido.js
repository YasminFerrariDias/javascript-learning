let date = (new Date("2024-06-03T14:30:00")) 

// Exibe a data e hora no formato local
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())

// Exibe a data e hora no formato escolhido
console.log(date.toLocaleDateString("en"))
console.log(date.toLocaleTimeString("en"))
