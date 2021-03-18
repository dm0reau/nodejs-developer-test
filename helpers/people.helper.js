const { filterAnimalsWhereNameContains } = require('./animals.helper');

function getPeopleWithAnimalsWhereNameContains(people, animalsNameFilter) {
  return people
    .map((person) => ({
      name: person.name,
      animals: filterAnimalsWhereNameContains(
        person.animals,
        animalsNameFilter
      ),
    }))
    .filter((person) => {
      if (person.animals.length === 0) {
        return false;
      }
      return true;
    });
}

module.exports = {
  getPeopleWithAnimalsWhereNameContains,
};
