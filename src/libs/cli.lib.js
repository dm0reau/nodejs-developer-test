const {
  getCountriesWithAnimalsWhereNameContains,
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

  exec() {
    const appArg = this.getAppArg();
    console.log(`Exec with args : ${appArg}`);
  }

  getResultForFilterArg(filterArgValue) {
    return getCountriesWithAnimalsWhereNameContains(filterArgValue);
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
