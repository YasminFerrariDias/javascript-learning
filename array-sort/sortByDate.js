// Ordena meses por data usando a biblioteca moment-timezone com timezone de São Paulo.
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
