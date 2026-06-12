// Demonstra a criação de datas com fuso horário e exibição no formato local com toLocaleString e toLocaleDateString.
const dateWithTimezone = new Date("2023-12-12T22:56:30.603+03:00")

console.log(new Date().toLocaleString())
console.log(dateWithTimezone.toLocaleDateString())
