// O span define que vai ser mantido o elemento e mudado apenas o conteúdo
const guest = document.querySelector("#guest-1 span")

// Retorna o conteúdo como texto
console.log(guest.textContent)

// Define o novo valor
guest.textContent = "João"

const guest = document.querySelector("#guest-1")

console.log(guest.textContent) // Retorna o conteudo visivel e oculto
console.log(guest.innerText) // Retorna apenas o conteudo visivel
console.log(guest.innerHTML) // Retorna o HTML
