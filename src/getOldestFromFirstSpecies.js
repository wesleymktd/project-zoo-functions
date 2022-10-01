const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

function getOldestFromFirstSpecies(id) {
  const firstIdAnimal = data.employees.filter((element) => element.id === id)[0]
    .responsibleFor[0]; // testado já tenho o primeiro id dos animais que a apessoa colaboradora é responsável
  const animals = data.species.filter((elem) => elem.id === firstIdAnimal)[0].residents // testado aqui eu tenho os animais que a pessoa colaboradora cuida
    .reduce((acum, elemCorr) => {
      if (acum.age > elemCorr.age) {
        return acum;
      }
      return elemCorr;
    });

  return Object.values(animals);
}
console.log(getOldestFromFirstSpecies(stephanieId))
module.exports = getOldestFromFirstSpecies;
