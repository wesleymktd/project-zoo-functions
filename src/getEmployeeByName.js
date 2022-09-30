const data = require('../data/zoo_data');

function getEmployeeByName(first) {
  if (!first) return {};
  return data.employees.find((people) => people.firstName === first || people.lastName === first);
}

module.exports = getEmployeeByName;
