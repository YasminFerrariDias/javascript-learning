// Marca uma tarefa como concluída pelo id informado, usando some() para validar e map() para atualizar.
const tasks = [
  { id: 1, done: false },
  { id: 2, done: false },
];

function markDone(tasks, id) {
  id = prompt("Escolha um id (1 ou 2):");

  console.log(tasks);
  let selected = tasks.some((task) => task.id == id);
  if (selected) {
    novo = tasks.map((task) => {
      if (task.id == id) {
        return {
          id: task.id,
          done: true,
        }
      }
      return task
    });
    console.log(novo);
  } else {
    console.log("Nenhum ID encontrado, escreva um ID válido!");
  }
}

markDone(tasks);
