const {
  getCountriesWithAnimalsWhereNameContains,
  getCountriesWithPeopleAndAnimalsCountInName,
} = require('../helpers/countries.helper');

const allowedArgNames = ['--filter', '--count'];

class CLI {
  _appArg = {
    name: null,
    value: null,
  };

  constructor(argv) {
    this._argv = argv;
  }

  getJSONResult() {
    const appArg = this.getAppArg();
    let result = [];
    if (appArg.name === '--filter') {
      result = this.getJSONResultForFilterArg(appArg.value);
    } else if (appArg.name === '--count') {
      result = this.getJSONResultForCountArg();
    }
    return result;
  }

  getJSONResultForFilterArg(filterArgValue) {
    return getCountriesWithAnimalsWhereNameContains(filterArgValue);
  }

  getJSONResultForCountArg() {
    return getCountriesWithPeopleAndAnimalsCountInName();
  }

  getAppArg() {
    this._parseAppArg();
    return this._appArg;
  }

  getPassedArg() {
    return this._argv.slice(2, 3)[0];
  }

  _parseAppArg() {
    if (this._argv.length <= 2) {
      throw new Error('App must have at least one option as argument');
    }
    const passedArg = this.getPassedArg();
    this._appArg = this._parsePassedArgToAppArg(passedArg);
    this._checkAppArg();
  }

  _parsePassedArgToAppArg(passedArg) {
    const [name, value] = passedArg.split('=');
    return {
      name,
      value: value ?? null,
    };
  }

  _checkAppArg() {
    if (!allowedArgNames.includes(this._appArg.name)) {
      throw new Error(
        `${this._appArg.name} is disallowed. Allowed args: ${allowedArgNames}`
      );
    }
  }
}

module.exports = {
  CLI,
};
