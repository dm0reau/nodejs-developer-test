function filterAnimalsWhereNameContains(animals, animalsNameFilter) {
  return animals.filter((animal) => {
    if (animal.name.includes(animalsNameFilter)) {
      return true;
    }
    return false;
  });
}

module.exports = {
  filterAnimalsWhereNameContains,
};
