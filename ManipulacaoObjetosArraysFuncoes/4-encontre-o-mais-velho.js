const people = [
  { name: "Luiz", age: 22 },
  { name: "Maik", age: 30 },
  { name: "Kelvin", age: 28 },
  // mudei a ordem do 2° e 3° para validar
];

/* Meu código original, ele compara as idades assim como eu queria,
   porém ele me retornava apenas a idade, não tava conseguindo pegar
   o nome da pessoa mais velha.
const old = people.reduce((comparison, {age}) => { 
  // console.log(comparison) 
  // console.log(age) 
  return older = comparison > age ? comparison : age; 
}, 0) 

// ESSE ERA O PROBLEMA
console.log(people{name}.older)*/

// Pedi para a IA me explicar a lógica do problema, como eu retornaria
// o nome, o problema é que eu estava pegando APENAS NA IDADE, já agora
// eu pego A PESSOA e continuo comparando com as idades

function getOldest(people) {
  const old = people.reduce((comparison, current) => {
    // TESTE para ver o que retornava
    // console.log(comparison.age);
    // console.log(current.age);
    return comparison.age > current.age ? comparison : current;
  }, 0);

  console.log(old);
}

getOldest(people)
