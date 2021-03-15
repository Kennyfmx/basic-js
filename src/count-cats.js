const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0;
  let checkArr = matrix.flat();
  for (let i = 0; i <= checkArr.length; i++) {
    if (checkArr[i] === "^^") {
      return counter += 1;
    }
  }
  return counter;
};
