const { getAnimalsWhereNameContains } = require('./animals.helper');

describe('getAnimalsWhereNameContains', () => {
  const animalsMock = [
    { name: 'Anoa' },
    { name: 'Badger' },
    { name: 'Cobra' },
    { name: 'Common Genet' },
    { name: 'Crow' },
  ];

  it('should get 1 animal with "Ano" name filter', () => {
    const nameFilter = 'Ano';
    const filteredAnimals = getAnimalsWhereNameContains(
      animalsMock,
      nameFilter
    );
    const anoa = filteredAnimals[0];

    expect(filteredAnimals.length).toBe(1);
    expect(anoa.name).toBe('Anoa');
  });

  it('should get 2 animals with "co" name filter', () => {
    const nameFilter = 'co';
    const filteredAnimals = getAnimalsWhereNameContains(
      animalsMock,
      nameFilter
    );
    const cobra = filteredAnimals[0];
    const commonGenet = filteredAnimals[1];

    expect(filteredAnimals.length).toBe(2);
    expect(cobra.name).toBe('Cobra');
    expect(commonGenet.name).toBe('Common Genet');
  });
});
