// Visualizar o conteúdo do documento
console.log(document)

// Obter o título da página
console.log(document.title)

// Acessar o elemento pelo ID
const guest = document.getElementById("guest-2")
console.log(guest)

// Visualizar as propriedades do objeto
console.dir(guest)

// Acessar o elemento com class (SELETOR class)
const guestsByClass = document.getElementsByClassName("guest")
console.log(guestsByClass)

// Exibir o 1° elemento da lista - o 1° é o 0
console.log(guestsByClass.item(0))
console.log(guestsByClass[1])

// Selecionar a lista por elementos pela tag
const guestsbyTag = document.getElementsByTagName("li")
console.log(guestsbyTag)
