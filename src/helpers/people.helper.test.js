const { describe, it, expect } = require('@jest/globals');
const { getPeopleWithAnimalsWhereNameContains } = require('./people.helper');

describe('getPeopleWithAnimalsWhereNameContains', () => {
  const peopleMock = [
    {
      name: 'Winifred Graham',
      animals: [
        { name: 'Anoa' },
        { name: 'Duck' },
        { name: 'Narwhal' },
        { name: 'Badger' },
        { name: 'Cobra' },
        { name: 'Crow' },
      ],
    },
    {
      name: 'Louise Pinzauti',
      animals: [
        { name: 'Manta Ray' },
        { name: 'Nubian Ibex' },
        { name: 'Warbler' },
        { name: 'Duck' },
        { name: 'Mice' },
      ],
    },
    {
      name: 'Bobby Ristori',
      animals: [
        { name: 'Kowari' },
        { name: 'Caecilian' },
        { name: 'Common Genet' },
        { name: 'Chipmunk' },
        { name: 'Aardwolf' },
        { name: "Przewalski's Horse" },
        { name: 'Badger' },
        { name: 'Sand Cat' },
        { name: "Linne's Two-toed Sloth" },
      ],
    },
  ];
  const animalsNameFilter = 'co';

  it('should give 2 persons', () => {
    const filteredPeople = getPeopleWithAnimalsWhereNameContains(
      peopleMock,
      animalsNameFilter
    );
    expect(filteredPeople.length).toBe(2);
  });

  it('should give 1 animal for Winifred & Bobby', () => {
    const filteredPeople = getPeopleWithAnimalsWhereNameContains(
      peopleMock,
      animalsNameFilter
    );
    const winifred = filteredPeople[0];
    const bobby = filteredPeople[1];
    expect(winifred.animals.length).toBe(1);
    expect(bobby.animals.length).toBe(1);
  });
});
