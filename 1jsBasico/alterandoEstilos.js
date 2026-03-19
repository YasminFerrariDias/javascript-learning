const input = document.querySelector("#name")

// Adiciona a classe 
input.classList.add("input-error")

// Remove a classe 
input.classList.remove("input-error")

// Se não tem a classe, adicione. Se tem, remove
input.classList.toggle("input-error")

const button = document.querySelector("button")

// Modifica o css dos elementos
button.style.backgroundColor = "red"
