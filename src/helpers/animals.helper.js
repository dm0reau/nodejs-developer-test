function getAnimalsWhereNameContains(animals, animalsNameFilter) {
  const lowerCaseAnimalsNameFilter = animalsNameFilter.toLowerCase();

  return animals.filter((animal) => {
    const lowerCaseAnimalName = animal.name.toLowerCase();

    if (lowerCaseAnimalName.includes(lowerCaseAnimalsNameFilter)) {
      return true;
    }
    return false;
  });
}

module.exports = {
  getAnimalsWhereNameContains,
};
