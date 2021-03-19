const { describe, it, expect } = require('@jest/globals');
const { CLI } = require('./cli.lib');

describe('CLI lib', () => {
  const argvMock = ['node', 'app.js', '--filter=test', '--count'];

  it('should give app args with their names & values', () => {
    const cli = new CLI(argvMock);
    const appArgs = cli.getAppArgs();
    expect(appArgs).toMatchObject([
      {
        name: '--filter',
        value: 'test',
      },
      {
        name: '--count',
        value: null,
      },
    ]);
  });

  it('should give passed arguments', () => {
    const cli = new CLI(argvMock);
    const passedArgs = cli.getPassedArgs();
    expect(passedArgs).toMatchObject(['--filter=test', '--count']);
  });

  it('should throw without args', () => {
    const cli = new CLI();
    expect(cli.exec).toThrow('App must have at least one option as argument');
  });

  it('should check allowed args', () => {
    const disallowedArgvMock = ['node', 'app.js', '--foo=bar', '--count'];
    const cli = new CLI(disallowedArgvMock);
    expect(cli.exec).toThrow();
  });
});
