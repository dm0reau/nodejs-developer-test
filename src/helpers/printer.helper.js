const util = require('util');

function printOutput(jsonResult) {
  if (!(jsonResult instanceof Array)) {
    throw new Error('jsonResult param must be an Array');
  }
  console.log(getResultOutput(jsonResult));
}

function getResultOutput(jsonResult) {
  if (jsonResult.length === 0) {
    return '';
  }
  return util.inspect(jsonResult, { depth: null });
}

module.exports = {
  printOutput,
  getResultOutput,
};
