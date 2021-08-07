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

	return sum;
};

// Part 2 - Add numbers in string using ',' && \n as delimiter .

const addString2 = (string) => {
	// Part 1 - Used string.split(',')
	// Part 2 - Added regex to handle \n as .split() delimiter

	if (!string) return 0;

	const numArray = string.split(/,|\n /);
	const sum = numArray.reduce(function addNumbers(sum, num) {
		if (typeof num !== "string") return sum + 0;
		return sum + parseInt(num, 10);
	}, 0);

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

// Part 4 - Handle all cases

const add = (string) => {
	if (!string) return 0;

	// Defaults
	let delimiter = ",";
	let numString = string;
	let negativeNumList = [];

	// Handle custom delimiter cases
	if (string.slice(0, 2) === "//") {
		const splitDelimiter = string.split("\n");

		//remove formatting before delimiter
		delimiter = splitDelimiter[0].slice(2);

		numString = splitDelimiter[1];
	}

	// Split string into array using delimiter
	const numArray = numString.split(delimiter);

	const sum = numArray.reduce(function addNumbers(sum, num) {
		const number = parseInt(num, 10);
		console.log(number);
		// if (typeof num !== "string") return sum + 0;
		if (number < 0) negativeNumList.push(num);
		return sum + parseInt(num, 10);
	}, 0);

	// Handle negative number edge case
	if (negativeNumList.length) {
		const negativeNumberString = negativeNumList.join(", ");
		return `Negatives not allowed. The string contained ${negativeNumberString}`;
	} else return sum;
};

module.exports = { addString1, addString2, addString3, add };
