const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const result = data.species.filter((element) => ids.some((elem) => elem === element.id));
  return result;
}
console.log(getSpeciesByIds('89be95b3-47e4-4c5b-b687-1fabf2afa274'))
module.exports = getSpeciesByIds;
