const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if (!Array.isArray(members)) return false;
	let letters = [];
	for (let name of members) {
		if (typeof name == "string") {
			letters.push(String(name.replace(/\s/gi, '').toUpperCase().substring(0, 1)));
		}
	}
	return letters.sort().join('');
};
