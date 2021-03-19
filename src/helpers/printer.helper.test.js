const { describe, it, expect } = require('@jest/globals');
const { printOutput, getResultOutput } = require('./printer.helper');

describe('printOutput', () => {
  it('should throw if jsonResult isnt an array', () => {
    expect(() => printOutput(null)).toThrow('must be an Array');
  });
});

describe('getResultOutput', () => {
  it('should output an empty string when result is an empty array', () => {
    const output = getResultOutput([]);
    expect(output).toBe('');
  });

  it('should output a string when result is an array with objects', () => {
    const resultMock = [
      {
        name: 'toto',
        thing: [
          {
            name: 'titi',
          },
        ],
      },
    ];
    const output = getResultOutput(resultMock);
    expect(output).toContain("name: 'titi'");
  });
});
