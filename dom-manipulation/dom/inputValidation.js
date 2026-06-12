// Valida o conteúdo de um input no submit do formulário usando expressão regular.
const input = document.querySelector("input")
const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const regex = /\D+/g
  const value = input.value
  
  if (regex.test(value)) {
    console.log(value)
  } else {
    alert("Valor inválido. Digite corretamente!")
  }
})
