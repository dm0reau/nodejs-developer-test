const { data: countries } = require('../data');
const {
  getPeopleWithAnimalsWhereNameContains,
  getPeopleWithAnimalsCountInName,
} = require('./people.helper');

function getCountriesWithAnimalsWhereNameContains(animalsNameFilter) {
  if (typeof animalsNameFilter !== 'string') {
    throw new Error(
      `animalsNameFilter param must be a string. Given ${animalsNameFilter}`
    );
  }

  return countries
    .map((country) => ({
      name: country.name,
      people: getPeopleWithAnimalsWhereNameContains(
        country.people,
        animalsNameFilter
      ),
    }))
    .filter((country) => {
      if (country.people.length === 0) {
        return false;
      }
      return true;
    });
}

function getCountriesWithPeopleAndAnimalsCountInName() {
  return countries.map((country) => ({
    name: `${country.name} [${country.people.length}]`,
    people: getPeopleWithAnimalsCountInName(country.people),
  }));
}

module.exports = {
  getCountriesWithAnimalsWhereNameContains,
  getCountriesWithPeopleAndAnimalsCountInName,
};
