const data = require('../data/zoo_data');

const getSpecies = (inf) => {
  if (inf.name) {
    const idSpecResp = data.employees.filter((ele1) =>
      (ele1.firstName === inf.name || ele1.lastName === inf.name))[0]
      .responsibleFor.map((el2) => data.species.find((el3) => el3.id === el2).name);
    return idSpecResp;
  }
  const idSpecResp2 = data.employees.filter((ele4) =>
    (ele4.id === inf.id))[0]
    .responsibleFor.map((el2) => data.species.find((el4) => el4.id === el2).name);
  return idSpecResp2;
};

const getId = (inf1) => {
  if (inf1.name) {
    const idSpecResp = data.employees.filter((ele1) =>
      (ele1.firstName === inf1.name || ele1.lastName === inf1.name))[0].id;
    return idSpecResp;
  }
  const idSpecResp2 = data.employees.filter((ele4) =>
    (ele4.id === inf1.id))[0].id;
  return idSpecResp2;
};

const getFullName = (inf1) => {
  if (inf1.name) {
    const firstNam = data.employees.filter((ele1) =>
      (ele1.firstName === inf1.name || ele1.lastName === inf1.name))[0].firstName;
    const lastNam = data.employees.filter((ele1) =>
      (ele1.firstName === inf1.name || ele1.lastName === inf1.name))[0].lastName;
    return `${firstNam} ${lastNam}`;
  }
  const firstNam1 = data.employees.filter((ele4) =>
    (ele4.id === inf1.id))[0].firstName;
  const lastNam1 = data.employees.filter((ele4) =>
    (ele4.id === inf1.id))[0].lastName;
  return `${firstNam1} ${lastNam1}`;
};

const getLocations = (inf) => {
  if (inf.name) {
    const idSpecResp = data.employees.filter((ele1) =>
      (ele1.firstName === inf.name || ele1.lastName === inf.name))[0]
      .responsibleFor.map((el2) => data.species.find((el3) => el3.id === el2).location);
    return idSpecResp;
  }
  const idSpecResp2 = data.employees.filter((ele4) =>
    (ele4.id === inf.id))[0]
    .responsibleFor.map((el2) => data.species.find((el4) => el4.id === el2).location);
  return idSpecResp2;
};

const creatorFullEmployers = data.employees.map((element) => {
  const test = {
    id: getId(element),
    fullName: getFullName(element),
    species: getSpecies(element),
    locations: getLocations(element),
  };
  return test;
});

const creatorObj = (obj) => {
  const test = {
    id: getId(obj),
    fullName: getFullName(obj),
    species: getSpecies(obj),
    locations: getLocations(obj),
  };
  return test;
};

function getEmployeesCoverage(employObj) {
  if (!employObj) return creatorFullEmployers;
  if (data.employees.some((elen) => elen.id === employObj.id
   || elen.firstName === employObj.name || elen.lastName === employObj.name)) {
    return creatorObj(employObj);
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
