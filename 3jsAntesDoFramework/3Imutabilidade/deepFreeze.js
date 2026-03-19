const book = {
	title: "Objetos Imutáveis",
	category: "javascript",
	author: {
		name: "Rodrigo",
		email: "rodrigo@email.com"
	},
}

function deepFreeze(object) {
	// Obtém um array com todas as propriedades do objeto
	const props = Reflect.ownKeys(object)

	// Itera sobre todas as propriedades do objeto
	for (const prop of props) {
		// Obtém o valor associado à propriedade atual
		const value = object[prop]

		if (value && typeof value === "object" || typeof value === "function"){
			deepFreeze(value)
		}
	}

	// Retorna o objeto congelado
	return Object.freeze(object)
}

// Chama a função para congelar o objeto com Deep Freeze (congelamento profundo)
deepFreeze(book)

book.category = "HTML"
book.author.name = "João"

console.log(book)
