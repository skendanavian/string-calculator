// Step 1

const addString = (string) => {
	console.log(string);
	const numArray = string.split(",");
	const sum = numArray.reduce(function addNumbers(sum, num) {
		return sum + parseInt(num, 10);
	}, 0);
	return sum;
};

module.exports = addString;

addString("1,2,5");
