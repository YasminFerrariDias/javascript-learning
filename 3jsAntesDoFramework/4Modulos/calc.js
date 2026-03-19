export class Calc {
  // exemplo de como fica as função dentro de uma classe, não precisa do "function"
	sumWithinClass(a, b) {
		return a + b
	}
}

// default export - é a função padrão fornecida pelo módulo 
export default function sum(a, b) {
    return a + b
}

// named export - cada método é importado pelo seu próprio nome de exportação 
export function multiply(a, b) {
    return a * b
}
// exportação no final da página
function subtraction(a, b) {
    return a - b
}

// Ou ao invés de fazer a exportação em cada função, é possível fazer tudo no final com esse comando
// Pode renomear o nome da função 
export { subtraction as subtractionTwoNumbers}
