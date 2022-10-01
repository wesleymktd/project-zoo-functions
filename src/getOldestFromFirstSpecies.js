const data = require('../data/zoo_data');

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

module.exports = getOldestFromFirstSpecies;
