const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// eu preciso verificar através de alguma condicional se o parâmetro passado é igual a propriedade
// name do array species, se for verdadeiro, retornar a chave availability do animal encontrado
// **ferramentas disponíveis Hofs** forEach
//
// Retorne um array com os dias da semana em que um animal está disponível para visitação
// caso o parâmetro da função seja um animal.
// Por exemplo: [ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ]

const defaulSchedule = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions', 'tigers',
      'bears', 'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants' ],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

function getSchedule(scheduleTarget) {
  if (species.some((specie) => specie.name === scheduleTarget)) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  }
  if (defaulSchedule[scheduleTarget]) {
    return defaulSchedule[scheduleTarget];
  }
  return defaulSchedule;
}
console.log(Object.entries(defaulSchedule));
module.exports = getSchedule;

// defaulSchedule.find((schedule) => schedule.scheduleTarget);