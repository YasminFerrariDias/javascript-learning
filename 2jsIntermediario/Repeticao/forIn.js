let person = {
  name: "Rodrigo",
  surname: "Gonçalves",
  email: "rodrigo@gmail.com"
}

let steps = 1

for (let property in person) {
  // Exibe o nome da propriedade
  console.log(property)

  // Exibe o conteúdo da propriedade
  console.log(person[property])
}

let students = ["Rodrigo", "João", "Amanda"]

for (let index in students) {
  console.log(index)
  console.log(students[index])
}

