// Step 1

const addString = (string) => {
	if (!string) return 0;

	const numArray = string.split(",");
	const sum = numArray.reduce(function addNumbers(sum, num) {
		return sum + parseInt(num, 10);
	}, 0);
	return sum;
};

module.exports = addString;
