// Através do moment passando o timezone para pegar a data atual do local do usuário
// - vamos otimizar

/* VERSÃO ANTIGA
import moment from "moment-timezone";

const monthsDue = ['December', 'April', 'August', 'May']

const sortMonthsDue = (m) =>
  m.sort((a, b) => 
    moment(a, 'MMMM').tz('America/Sao_Paulo')
    > moment(b, 'MMMM').tz('America/Sao_Paulo')
      ? 1 : -1
  )
sortMonthsDue(monthsDue)*/

// VERSÃO OTIMIZADA
import moment from 'https://cdn.jsdelivr.net/npm/moment-timezone@0.5.45/+esm';

const monthsDue = ['December', 'April', 'August', 'May']

const sortMonthsDue = (m) => {
  const myCopy = m.map((month, i) => ({
    i,
    value: moment(month, 'MMMM').tz('America/Sao_Paulo')
  }));

  return myCopy
    .sort((a, b) => a.value > b.value ? 1 : -1)
    .map((obj) => m[obj.i]);
}

console.log(sortMonthsDue(monthsDue))
