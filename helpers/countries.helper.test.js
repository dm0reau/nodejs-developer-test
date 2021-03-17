const { describe, it, expect } = require('@jest/globals');
const { CountriesHelper } = require('./countries.helper');

describe('getCountriesWhereAnimalsNameContains', () => {
  const animalsNameFilter = 'ry';

  it('should throw an error when nameContains param is not provided', () => {
    expect(CountriesHelper.getCountriesWhereAnimalsNameContains).toThrow();
  });

  it('should give an array', () => {
    const filteredCountries = CountriesHelper.getCountriesWhereAnimalsNameContains(
      animalsNameFilter
    );
    expect(filteredCountries).toBeInstanceOf(Array);
  });

  it('should give an array with at least 1 element', () => {
    const filteredCountries = CountriesHelper.getCountriesWhereAnimalsNameContains(
      animalsNameFilter
    );
    expect(filteredCountries.length).toBeGreaterThan(0);
  });

  it('should give an array of countries with their name', () => {
    const filteredCountries = CountriesHelper.getCountriesWhereAnimalsNameContains(
      animalsNameFilter
    );
    const firstCountry = filteredCountries[0];
    expect(firstCountry).toHaveProperty('name');
  });

  it('should give an array of countries with people', () => {
    const filteredCountries = CountriesHelper.getCountriesWhereAnimalsNameContains(
      animalsNameFilter
    );
    const firstCountry = filteredCountries[0];
    expect(firstCountry).toHaveProperty('people');
  });
});
