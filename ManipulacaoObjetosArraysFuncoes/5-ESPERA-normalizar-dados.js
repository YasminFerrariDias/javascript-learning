const data = [
  { id: 1, name: "Cadeira" },
  { id: 2, name: "Mesa" },
];

function normalize(data) {
  const normal = data.reduce((accumulator, value) => {
    console.log("A", accumulator)
    console.log(value.id)
    
    return value.id + value.name
  }, 0)
  return(normal)
}

normalize(data)
/*
const tasks = [
  { id: 1, done: false },
  { id: 2, done: false },
];

function markDone(tasks, teste) {
  console.log(tasks);

  teste = tasks.map((task) => (task.done = true));
  console.log(teste);
}

markDone(tasks);

*/