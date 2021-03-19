const { describe, it, expect } = require('@jest/globals');
const { CLI } = require('./cli.lib');

describe('CLI lib', () => {
  const argvMock = ['node', 'app.js', '--filter=test'];

  it('should give app arg with its name & value', () => {
    const cli = new CLI(argvMock);
    const appArg = cli.getAppArg();
    expect(appArg).toMatchObject({
      name: '--filter',
      value: 'test',
    });
  });

  it('should give result with filter arg', () => {
    const filterArgvMock = ['node', 'app.js', '--filter=co'];
    const cli = new CLI(filterArgvMock);
    const result = cli.getJSONResultForFilterArg('co');
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThan(1);
  });

  it('should give passed arguments', () => {
    const cli = new CLI(argvMock);
    const passedArg = cli.getPassedArg();
    expect(passedArg).toBe('--filter=test');
  });

  it('should throw without args', () => {
    const withoutArgsMock = ['node', 'app.js'];
    const cli = new CLI(withoutArgsMock);
    expect(() => cli.getJSONResult()).toThrow(
      'App must have at least one option as argument'
    );
  });

  it('should check allowed args', () => {
    const disallowedArgvMock = ['node', 'app.js', '--foo=bar'];
    const cli = new CLI(disallowedArgvMock);
    expect(() => cli.getJSONResult()).toThrow(
      '--foo is disallowed. Allowed args:'
    );
  });
});
