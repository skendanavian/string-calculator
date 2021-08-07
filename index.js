// Part 1 - Add numbers in string using ',' as delimiter.

const addString1 = (string) => {
	// Part 1 - Used string.split(',')
	// Part 2 - Added regex to handle \n as .split() delimiter

	if (!string) return 0;

	const numArray = string.split(",");
	const sum = numArray.reduce(function addNumbers(sum, num) {
		if (typeof num !== "string") return sum + 0;
		return sum + parseInt(num, 10);
	}, 0);

	console.log(sum);
	return sum;
};

// Part 1 - Add numbers in string using ',' && \n as delimiter .

const addString2 = (string) => {
	// Part 1 - Used string.split(',')
	// Part 2 - Added regex to handle \n as .split() delimiter

	if (!string) return 0;

	const numArray = string.split(/,|\n /);
	const sum = numArray.reduce(function addNumbers(sum, num) {
		if (typeof num !== "string") return sum + 0;
		return sum + parseInt(num, 10);
	}, 0);

	console.log(sum);
	return sum;
};

// Part 3 - Parse string and use a provided delimiter to split and sum the numbers in the string.

const addString3 = (string) => {
	if (!string) return 0;

	const splitDelimiter = string.split("\n");

	//remove formatting before delimiter
	const delimiter = splitDelimiter[0].slice(2);

	//split string into array based on provided delimiter
	const numberArray = splitDelimiter[1].split(delimiter);

	const sum = numberArray.reduce(function addNumbers(sum, num) {
		if (typeof num !== "string") return sum + 0;
		return sum + parseInt(num, 10);
	}, 0);

	return sum;
};

module.exports = { addString1, addString2, addString3 };
