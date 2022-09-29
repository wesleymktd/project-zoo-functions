const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const result = data.species.filter((element) => ids.some((elem) => elem === element.id)); 
  return result;
}

module.exports = getSpeciesByIds;
