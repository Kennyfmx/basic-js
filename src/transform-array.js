const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Eroro');
  }
  let transformed = [];
  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case "--discard-next":
        i++;
        continue;
      case "--discard-prev":
        if (arr[i - 2] != "--discard-next") {
        transformed.pop();
        }
        continue;
      case "--double-next":
        if (arr[i + 1] != undefined) {
          transformed.push(arr[i + 1]);
        }
        continue;
      case "--double-prev":
        if (arr[i - 2] != "--discard-next" && arr[i - 1] != undefined) {
          transformed.push(transformed[transformed.length - 1]);
        }
        continue;
      default: transformed.push(arr[i]);
    }
  }
  return transformed;
}