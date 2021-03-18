const { data: countries } = require('../data');
const { filterAnimalsWhereNameContains } = require('./animals.helper');

function getCountriesWithAnimalsNameContaining(animalsNameFilter) {
  if (typeof animalsNameFilter !== 'string') {
    throw new Error(
      `animalsNameFilter param must be a string. Given ${animalsNameFilter}`
    );
  }

  const countriesWithFilteredAnimals = countries.map((country) => ({
    name: country.name,
    people: getPeopleWithAnimalsWhereNameContains(
      country.people,
      animalsNameFilter
    ),
  }));

  return filterCountriesWhichHasAnimals(countriesWithFilteredAnimals);
}

function getPeopleWithAnimalsWhereNameContains(people, animalsNameFilter) {
  return people.map((person) => ({
    name: person.name,
    animals: filterAnimalsWhereNameContains(person.animals, animalsNameFilter),
  }));
}

function filterCountriesWhichHasAnimals(countries) {
  return countries.filter((country) => {
    const peopleWithAnimals = country.people.filter((person) => {
      if (person.animals.length === 0) {
        return false;
      }
      return true;
    });
    return peopleWithAnimals.length > 0;
  });
}

module.exports = {
  getCountriesWithAnimalsNameContaining,
  getPeopleWithAnimalsWhereNameContains,
  filterAnimalsWhereNameContains,
  filterCountriesWhichHasAnimals,
};
