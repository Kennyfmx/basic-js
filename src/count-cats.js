const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0;
  let checkArr = matrix.flat();
  checkArr.forEach(element => {
		if (checkArr[element] == "^^") {
			counter++;
		}
	}); 
	return counter;
};
