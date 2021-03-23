const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    let max = 1;
    arr.forEach(element => {
      if (Array.isArray(element)) {
        counter += this.calculateDepth(element);
        if (counter > max) {
          max = counter;
        }
      }
      counter = 1;
    });
    return max;
  }
};