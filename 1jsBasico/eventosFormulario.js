const form = document.querySelector("form")

form.onsubmit = (event) => {
  event.preventDefault()
  console.log("Você fez um submit! 1")
}

form.onsubmit = (event) => {
  event.preventDefault()
  console.log("Você fez um submit! 2")
}

form.addEventListener("submit", (event) => {
  event.preventDefault()
  console.log("Você fez um submit! 3")
})

form.addEventListener("submit",(event) => {
  event.preventDefault()
  console.log("Você fez um submit! 4")
})
