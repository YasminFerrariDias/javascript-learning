/* Método para importar separadamente, não importa a ordem
   Quando se utiliza o DEFAULT, no momento de importar, ele não fica entre {}, e não importa o nome
   É possível renomear a importação com o AS */
import teste, { multiply, subtractionTwoNumbers as sub, Calc} from "./calc.js"

const calc = new Calc()

console.log("1 + 5 =", calc.sumWithinClass(1, 5))
console.log("4 + 6 =", teste(4, 6))
console.log("4 * 6 =", multiply(4, 6)) 
console.log("4 - 6 =", sub(4, 6)) 

/* Método para importar tudo uma única vez
   import * as calc from "./calc.js"
   console.log("4 + 6 =", calc.sum(4, 6))
   console.log("4 * 6 =", calc.multiply(4, 6)) */




