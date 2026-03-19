let date = (new Date("2024-06-03T14:30:00")) 

// Formata para sempre ter dois digitos - dia
let day = (date.getDate().toString().padStart(2, "0"))

// Formata para sempre ter dois digitos - mes
let month = (date.getMonth() + 1).toString().padStart(2, "0")

let year = date.getFullYear()
let hour = date.getHours()
let minute = date.getMinutes()

// Montar data ae hora padrão
console.log(`${day}/${month}/${year} às ${hour}:${minute}`)
