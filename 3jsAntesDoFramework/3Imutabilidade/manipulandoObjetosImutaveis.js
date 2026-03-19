const book = {
	title: "Objetos Imutáveis",
	category: "javascript",
	author: {
		name: "Rodrigo",
		email: "rodrigo@email.com"
	},
}

const updateBook = {
	...book,
	title: "Criando um Front-End moderno com HTML",
	category: "HTML",
	type: "Programming",
}

// Original intacto
console.log(book)

// Modificado 
console.log(updateBook)

// Utilizando operador de desestruturação (rest operator) para remover propriedades
const { category, ...bookWithoutCategory } = book
console.log(bookWithoutCategory)
