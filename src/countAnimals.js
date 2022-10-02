const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (typeof animal === 'undefined') {
    const bicho = {};
    data.species.forEach((element) => {
      bicho[element.name] = element.residents.length;
    });
    return bicho;
  }

  if (typeof animal.sex === 'string') {
    return data.species.filter((elen) => elen.name === animal.specie)[0].residents
      .filter((ele3) => ele3.sex === animal.sex).length;
  }

  return data.species.filter((elen) => elen.name === animal.specie)[0].residents.length;
}

module.exports = countAnimals;
