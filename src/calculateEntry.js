const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let totalChild = 0;
  let totalAdult = 0;
  let totalSenior = 0;

  entrants.forEach((element) => {
    if (element.age < 18) {
      totalChild += 1;
    } else if (element.age < 50) {
      totalAdult += 1;
    } else {
      totalSenior += 1;
    }
  });

  const total = { child: totalChild, adult: totalAdult, senior: totalSenior };

  return total;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const countEntr = countEntrants(entrants);
  const result = countEntr.adult * 49.99 + countEntr.child * 20.99 + countEntr.senior * 24.99;
  return result;
}

module.exports = { calculateEntry, countEntrants };
