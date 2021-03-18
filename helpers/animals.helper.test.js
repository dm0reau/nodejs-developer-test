const { filterAnimalsWhereNameContains } = require('./animals.helper');

describe('filterAnimalsWhereNameContains', () => {
  const animalsMock = [
    { name: 'Anoa' },
    { name: 'Badger' },
    { name: 'Cobra' },
    { name: 'Common Genet' },
    { name: 'Crow' },
  ];

  it('should get 1 animal with "Ano" name filter', () => {
    const nameFilter = 'Ano';
    const filteredAnimals = filterAnimalsWhereNameContains(
      animalsMock,
      nameFilter
    );
    const anoa = filteredAnimals[0];

    expect(filteredAnimals.length).toBe(1);
    expect(anoa.name).toBe('Anoa');
  });

  it('should get 2 animals with "co" name filter', () => {
    const nameFilter = 'co';
    const filteredAnimals = filterAnimalsWhereNameContains(
      animalsMock,
      nameFilter
    );
    const cobra = filteredAnimals[0];
    const commonGenet = filteredAnimals[1];

    expect(filteredAnimals.length).toBe(2);
    expect(cobra).toBe('Cobra');
    expect(commonGenet).toBe('Common Genet');
  });
});
