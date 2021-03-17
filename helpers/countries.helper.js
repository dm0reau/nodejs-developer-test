const { data: countries } = require('../data');

function getCountriesWithAnimalsNameContaining(animalsNameFilter) {
  if (typeof animalsNameFilter !== 'string') {
    throw new Error(
      `animalsNameFilter param must be a string. Given ${animalsNameFilter}`
    );
  }

  const countriesWithFilteredAnimals = countries.map((country) => ({
    name: country.name,
    people: getPeopleWithFilteredAnimals(country.people, animalsNameFilter),
  }));

  return filterCountriesWhichHasAnimals(countriesWithFilteredAnimals);
}

function getPeopleWithFilteredAnimals(people, animalsNameFilter) {
  return people.map((person) => ({
    name: person.name,
    animals: filterAnimalsWhereNameContaining(
      person.animals,
      animalsNameFilter
    ),
  }));
}

function filterAnimalsWhereNameContaining(animals, animalsNameFilter) {
  return animals.filter((animal) => {
    if (animal.name.includes(animalsNameFilter)) {
      return true;
    }
    return false;
  });
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
  getPeopleWithFilteredAnimals,
  filterAnimalsWhereNameContaining,
  filterCountriesWhichHasAnimals,
};
