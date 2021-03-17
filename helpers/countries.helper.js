const { data: countries } = require('../data');

const CountriesHelper = {
  getCountriesWhereAnimalsNameContains: (nameContains) => {
    if (typeof nameContains !== 'string') {
      throw new Error(
        `nameContains param must be a string. Given ${nameContains}`
      );
    }
    return countries;
  },
};

module.exports = {
  CountriesHelper,
};
