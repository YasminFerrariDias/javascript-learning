// Shallow copy (cópia superficial): não pega os itens aninhados

const htmlCourse = {
	course: "HTML",
	students: [{ name: "Rodrigo", email: "rodrigo@gmail"}],
}

/*const jsCourse = {
	...htmlCourse,
	course: "JavaScript"
}*/

// Vai modificar o htmleCouse também é uma referencia rasa, não uma copia
// jsCourse.students.push({ name: "João", email: "joao@gmail" })

// Deep Copy (copia profunda)
/*const  jsCourse = {
	...htmlCourse,
	course: "JavaScript",
	students: [...htmlCourse.students], 
}

jsCourse.students.push({ name: "João", email: "João@gmail"})*/

const  jsCourse = {
	...htmlCourse,
	course: "JavaScript", 
}

jsCourse.students.push({ name: "João", email: "João@gmail"})

console.log(htmlCourse, jsCourse)
