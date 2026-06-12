// O STRICT MODE - modo estrito
// Os erros que eram silenciosos passam a gerar excessões no JavaScript

console.log("STRICT MODE - modo estrito")
"use strict"

function showMessage() {
  let personName = "Rodrigo Gonçalves"

  console.log("Olá", personName)
}

showMessage()

class Student {
  get point() {
    return 7 
  }
}

let student = new Student()

// Tenta mudar uma propriedade somente leitura
// student.point = 10 

console.log(student.point)

// Tentando deletar uma propriedade que não pode deletar
// delete window.document

// Quando passamos parâmetros duplicados
/*function sum(a, a, c) {
  return a + a + c
}

const result= sum(1, 3, 2) // 3 + 3 + 2 = 8 (sem o strict mode)
console.log("RESULTADO: ", result)*/
