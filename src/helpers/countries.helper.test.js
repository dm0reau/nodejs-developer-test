const { describe, it, expect } = require('@jest/globals');
const {
  getCountriesWithAnimalsWhereNameContains,
  getCountriesWithPeopleCountInName,
} = require('./countries.helper');

describe('getCountriesWithAnimalsWhereNameContains', () => {
  const animalsNameFilter = 'ry';

  it('should throw an error when nameContaining param is not provided', () => {
    expect(getCountriesWithAnimalsWhereNameContains).toThrow();
  });

  it('should give an array', () => {
    const filteredCountries = getCountriesWithAnimalsWhereNameContains(
      animalsNameFilter
    );
    expect(filteredCountries).toBeInstanceOf(Array);
  });

  it('should give at least 1 element', () => {
    const filteredCountries = getCountriesWithAnimalsWhereNameContains(
      animalsNameFilter
    );
    expect(filteredCountries.length).toBeGreaterThan(0);
  });

  it('should give countries with their name', () => {
    const filteredCountries = getCountriesWithAnimalsWhereNameContains(
      animalsNameFilter
    );
    const firstCountry = filteredCountries[0];
    expect(firstCountry).toHaveProperty('name');
  });

  it('should give countries containing people', () => {
    const filteredCountries = getCountriesWithAnimalsWhereNameContains(
      animalsNameFilter
    );
    const firstCountry = filteredCountries[0];
    expect(firstCountry).toHaveProperty('people');
  });

  it('should give countries containing people containing animals', () => {
    const filteredCountries = getCountriesWithAnimalsWhereNameContains(
      animalsNameFilter
    );
    const firstCountry = filteredCountries[0];
    const firstPerson = firstCountry.people[0];
    expect(firstPerson).toHaveProperty('animals');
  });

  it("should give countries where animal's name containing given filter", () => {
    const filteredCountries = getCountriesWithAnimalsWhereNameContains(
      animalsNameFilter
    );
    const firstCountry = filteredCountries[0];
    const firstPerson = firstCountry.people[0];
    const firstAnimal = firstPerson.animals[0];
    expect(firstAnimal.name).toContain(animalsNameFilter);
  });
});

describe('getCountriesWithPeopleCountInName', () => {
  it("should give people count in each country's name", () => {
    const countries = getCountriesWithPeopleCountInName();
    const firstCountry = countries[0];
    expect(firstCountry.name).toBe(`Dillauti [5]`);
  });
});
