// Demonstra o operador de coalescência nula (??) para retornar valor padrão quando o valor é null ou undefined.
/*
  OPERADOR DE COALESCÊNIA NULA (??)
  Operador lógico que retorna o seu operando do lado direito quando seu operador 
  do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando 
  ao lado esquerdo.
*/

let content = null
console.log(content ?? "Conteúdo padrão")

const user = {
  name: "Rodrigo",
  avatar:'rodrigo.png',
}

console.log(user.avatar ?? "default.png")
