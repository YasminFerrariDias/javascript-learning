// Demonstra como acessar e modificar o conteúdo de elementos via textContent, innerText e innerHTML.
const guest = document.querySelector("#guest-1 span")

console.log(guest.textContent)

guest.textContent = "João"

const guest = document.querySelector("#guest-1")

console.log(guest.textContent)
console.log(guest.innerText)
console.log(guest.innerHTML)
