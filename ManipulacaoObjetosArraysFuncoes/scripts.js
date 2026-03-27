const users = [
  { name: "Ana", active: true },
  { name: "Bruno", active: false },
  { name: "Carla", active: true },
];

function getActiveUsers(users) {
  const user = users.filter((user) => user.active === true);
  return console.log(user);
}

console.log("Os usuários que estão ativos é:");
getActiveUsers(users);
