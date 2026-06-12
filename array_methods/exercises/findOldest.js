// Encontra a pessoa mais velha de um array de objetos usando reduce para comparar idades.
const people = [
  { name: "Luiz", age: 22 },
  { name: "Maik", age: 30 },
  { name: "Kelvin", age: 28 },
];

function getOldest(people) {
  const old = people.reduce((comparison, current) => {
    return comparison.age > current.age ? comparison : current;
  }, 0);

  console.log(old);
}

getOldest(people)
