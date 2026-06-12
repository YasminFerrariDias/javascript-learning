// Demonstra como adicionar, atualizar e remover atributos de elementos HTML via setAttribute e removeAttribute.
const input = document.querySelector("input")

input.setAttribute("disabled", true)
input.setAttribute("type", "file")

input.removeAttribute("id")
