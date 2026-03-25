const tasks = [
  { id: 1, done: false },
  { id: 2, done: false },
];

function markDone(tasks, id) {
  // Não tinha entendido se era pra mudar tudo ou o usuário escolhia, pedi pra ia me explicar e falou que o usuário escolhia
  id = prompt("Escolha um id (1 ou 2):");

  console.log(tasks);
  // Verifica se o id existe
  // - eu tava tentando mudar no próprio some() a variavel, mas a ia disse que minha lógica não fazia sentido
  let selected = tasks.some((task) => task.id == id);
  // SE É POSITIVO, ele continua
  if (selected) {
    // - então optei para usar o map() para criar um novo array
    // um problema que eu encontrei é que quando eu fazia o map, ele sobreescrevia o array antigo ao invés de criar um novo
    // - era porque eu não salvava a que eu tinha acabado de criar
    novo = tasks.map((task) => {
      // outro problema é que eu comecei a mudar tudo, ao inves de só o id
      // - faltava a comparação se era o mesmo ou não 
      if (task.id == id) {
        return {
          // o id garante que vai ser aquela mesma a ser alterada, antes não mudava nada
          id: task.id,
          done: true,
        }
      }
      return task
    });
    console.log(novo);

  // SE FOR NEGATIVO, ele para
  } else {
    console.log("Nenhum ID encontrado, escreva um ID válido!");
  }
}

markDone(tasks);
