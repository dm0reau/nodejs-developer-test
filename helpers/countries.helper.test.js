const { describe, it, expect } = require('@jest/globals');
const {
  getCountriesWithAnimalsNameContaining,
  filterCountriesWhichHasAnimals,
} = require('./countries.helper');

describe('getCountriesWithAnimalsNameContaining', () => {
  const animalsNameFilter = 'ry';

  it('should throw an error when nameContaining param is not provided', () => {
    expect(getCountriesWithAnimalsNameContaining).toThrow();
  });

  it('should give an array', () => {
    const filteredCountries = getCountriesWithAnimalsNameContaining(
      animalsNameFilter
    );
    expect(filteredCountries).toBeInstanceOf(Array);
  });

  it('should give at least 1 element', () => {
    const filteredCountries = getCountriesWithAnimalsNameContaining(
      animalsNameFilter
    );
    expect(filteredCountries.length).toBeGreaterThan(0);
  });

  it('should give countries with their name', () => {
    const filteredCountries = getCountriesWithAnimalsNameContaining(
      animalsNameFilter
    );
    const firstCountry = filteredCountries[0];
    expect(firstCountry).toHaveProperty('name');
  });

  it('should give countries containing people', () => {
    const filteredCountries = getCountriesWithAnimalsNameContaining(
      animalsNameFilter
    );
    const firstCountry = filteredCountries[0];
    expect(firstCountry).toHaveProperty('people');
  });

  it('should give countries containing people containing animals', () => {
    const filteredCountries = getCountriesWithAnimalsNameContaining(
      animalsNameFilter
    );
    const firstCountry = filteredCountries[0];
    const firstPerson = firstCountry.people[0];
    expect(firstPerson).toHaveProperty('animals');
  });

  it("should give countries where animal's name containing given filter", () => {
    const filteredCountries = getCountriesWithAnimalsNameContaining(
      animalsNameFilter
    );
    const firstCountry = filteredCountries[0];
    const firstPerson = firstCountry.people[0];
    const firstAnimal = firstPerson.animals[0];
    expect(firstAnimal.name).toContainEqual(animalsNameFilter);
  });
});

describe('filterCountriesWhichHasAnimals', () => {
  const countriesMock = [
    {
      name: 'Dillauti',
      people: [
        {
          name: 'Winifred Graham',
          animals: [],
        },
      ],
    },
    {
      name: 'Tohabdal',
      people: [
        {
          name: 'Effie Houghton',
          animals: [
            { name: 'Zebra' },
            { name: 'Ring-tailed Lemur' },
            { name: 'Fly' },
            { name: 'Blue Iguana' },
            { name: 'Emu' },
            { name: 'African Wild Ass' },
            { name: 'Numbat' },
          ],
        },
      ],
    },
  ];

  it('should give one country', () => {
    const filteredCountries = filterCountriesWhichHasAnimals(countriesMock);
    expect(filteredCountries).toHaveLength(1);
  });

  it('should give a country with animals', () => {
    const filteredCountries = filterCountriesWhichHasAnimals(countriesMock);
    const firstCountry = filteredCountries[0];
    const firstPerson = firstCountry.people[0];
    expect(firstPerson.animals.length).toBeGreaterThan(0);
  });
});
