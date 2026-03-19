let date = (new Date("2024-06-03T14:30:00")) 

// Exibe a data e hora no formato local
console.log(date.toLocaleString())

console.log(date.toLocaleString("en"))
console.log(date.toLocaleString("pt-br", {
  dateStyle: "short",
}))

console.log(date.toLocaleString("pt-br", {
  dateStyle: "medium",
}))

console.log(date.toLocaleString("pt-br", {
  dateStyle: "long",
}))

console.log(date.toLocaleString("pt-br", {
  dateStyle: "full",
}))

console.log(date.toLocaleString("pt-br", {
  day: "2-digit",
  month: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
}))

let amount = 12.5
console.log(amount.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
}))
