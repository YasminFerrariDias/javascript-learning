const guests = document.querySelector("ul")

// Cria novos elementos
const newGuest = document.createElement("li")
newGuest.classList.add("guest") 

const guestName = document.createElement("span")
// Atribui um valor aos novos elementos
guestName.textContent = "Diego"

// const guestSurname = document.createElement("span")
guestSurname.textContent = "Fernandes"

// Adiciona após o último filho
newGuest.append(guestName)
// Adiciona antes do primeiro filho
newGuest.prepend(guestSurname)

// MAIS SIMPLES QUE O APPEND
newGuest.appendChild(guestName)

console.log(newGuest)

guests.prepend(newGuest)
