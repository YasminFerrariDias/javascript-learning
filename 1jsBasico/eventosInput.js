const input = document.querySelector("input")

// KEYDOWN - quando uma tecla é precionada (captura tudo, incluindo CTRL, SHIFT, etc)
/* input.addEventListener("keydown", (event) => {
  console.log(event.key)
}) */

// KEYPRESS - quando uma tecla do tipo caractere é precionada (letras, números, postos, etc.)
input.addEventListener("keypress", (event) => {
  console.log(event.key)
})

// Só quando sai do elemento que irá ter alteração 
input.onchange = () => {
  console.log("mudou")
}

function inputChange() {
  console.log("mudou")
}
