const add = (string) => {
	if (!string) return 0;

	// Default Value Declarations

	let delimiter = ",";
	let numString = string;
	const negativeNumList = [];

	// Handle custom delimiter cases when string begins with '//'
	if (string.slice(0, 2) === "//") {
		const splitDelimiter = string.split("\n");

		delimiter = splitDelimiter[0].slice(2);

		//handle multiple delimiters

		if (delimiter.split(",").length > 1) {
			//separated outer parts of inner regexp to splice inner conditions into
			const regExpInnerArray = ["[", "]+"];

			delimiter.split(",").map((item, i) => {
				// add each delimiter to regexp array
				regExpInnerArray.splice(1 + i, 0, `${item}| `);
			});

			// join the inner regexp parts and generate regexp with multiple delimiters
			const generateRegExp = new RegExp(regExpInnerArray.join(""));
			delimiter = generateRegExp;
		}

		numString = splitDelimiter[1];
	}

	// Split provided string into an array using the current delimiter
	const numArray = numString.split(delimiter);

	// Sum the numbers from the array
	const sum = numArray.reduce(function addNumbers(sum, num) {
		// convert string to integer
		const number = parseInt(num, 10);

		// do not allow negative numbers -> push to array to be used later
		if (number < 0) negativeNumList.push(num);
		// do not include numbers above 1000 in the sum
		if (number > 1000) return sum;

		return sum + number;
	}, 0);

	// Handle negative number case
	if (negativeNumList.length) {
		const negativeNumberString = negativeNumList.join(", ");
		return `Negatives not allowed. The string contained ${negativeNumberString}`;
	} else return sum;
};

module.exports = { add };

// I originally thought that each step was to be separated into a different function. This original logic is below for reference.

// Part 1 - Add numbers in string using ',' as delimiter.

// const addString1 = (string) => {
// 	// Part 1 - Used string.split(',')
// 	// Part 2 - Added regex to handle \n as .split() delimiter

// 	if (!string) return 0;

// 	const numArray = string.split(",");
// 	const sum = numArray.reduce(function addNumbers(sum, num) {
// 		if (typeof num !== "string") return sum + 0;
// 		return sum + parseInt(num, 10);
// 	}, 0);

// 	return sum;
// };

// Part 2 - Add numbers in string using ',' && \n as delimiter .

// const addString2 = (string) => {
// Part 1 - Used string.split(',')
// Part 2 - Added regex to handle \n as .split() delimiter

// 	if (!string) return 0;

// 	const numArray = string.split(/,|\n /);
// 	const sum = numArray.reduce(function addNumbers(sum, num) {
// 		if (typeof num !== "string") return sum + 0;
// 		return sum + parseInt(num, 10);
// 	}, 0);

// 	return sum;
// };

// Part 3 - Parse string and use a provided delimiter to split and sum the numbers in the string.

// const addString3 = (string) => {
// 	if (!string) return 0;

// 	const splitDelimiter = string.split("\n");

// 	//remove formatting before delimiter
// 	const delimiter = splitDelimiter[0].slice(2);

// 	//split string into array based on provided delimiter
// 	const numberArray = splitDelimiter[1].split(delimiter);

// 	const sum = numberArray.reduce(function addNumbers(sum, num) {
// 		if (typeof num !== "string") return sum + 0;
// 		return sum + parseInt(num, 10);
// 	}, 0);

// 	return sum;
// };
