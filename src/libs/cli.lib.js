const allowedArgNames = ['--filter', '--count'];

class CLI {
  _appArgs = [];

  constructor(argv) {
    this._argv = argv;
  }

  exec() {
    console.log(`Exec with args : ${this.getAppArgs()}`);
  }

  getAppArgs() {
    this._parseAppArgs();
    return this._appArgs;
  }

  getPassedArgs() {
    return this._argv.slice(2, this._argv.length);
  }

  _parseAppArgs() {
    if (this._argv.length <= 2) {
      throw new Error('App must have at least one option as argument');
    }
    const passedArgs = this.getPassedArgs();
    this._appArgs = passedArgs.map(this._parsePassedArgToAppArg);
    this._checkAppArgs();
  }

  _parsePassedArgToAppArg(passedArg) {
    const [name, value] = passedArg.split('=');
    return {
      name,
      value: value ?? null,
    };
  }

  _checkAppArgs() {
    this._appArgs.forEach((appArg) => {
      if (!allowedArgNames.includes(appArg.name)) {
        throw new Error(
          `${appArg.name} is disallowed. Allowed args: ${allowedArgNames}`
        );
      }
    });
  }
}

module.exports = {
  CLI,
};
