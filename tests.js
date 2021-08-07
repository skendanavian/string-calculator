const chai = require("chai");
const expect = chai.expect;

const { add } = require("./index");

// Part 1
const testCase1 = "1,2,5"; // expect 8
const testCase2 = ""; // expect 0

describe("Part 1 - Comma Delimiter and Empty Strings return 0", function () {
	it("should add the numbers in the string correctly and return an integer", () => {
		expect(add(testCase1)).to.equal(8);
	});
	it("should return 0 when given an empty string as input", () => {
		expect(add(testCase2)).to.equal(0);
	});
});

// Part 2
const testCase3 = "1\n,2,3"; // expect 6
const testCase4 = "1,\n2,4"; // expect 7

describe("Part 2 - Comma and Newline Delimiter", function () {
	it("should add the numbers in the string correctly and return an integer", () => {
		expect(add(testCase3)).to.equal(6);
	});
	it("should add the numbers in the string correctly and return an integer", () => {
		expect(add(testCase4)).to.equal(7);
	});
});

// Part 3
const testCase5 = "//$\n1$2$3"; // expect 6
const testCase6 = "//@\n2@3@8"; // expect 13
const testCase7 = "//;\n1;3;4"; //expect 8

describe("Part 3 - Custom Delimiter", function () {
	it("should add the numbers in the string correctly and return an integer", () => {
		expect(add(testCase5)).to.equal(6);
	});
	it("should add the numbers in the string correctly and return an integer", () => {
		expect(add(testCase6)).to.equal(13);
	});

	it("should add the numbers in the string correctly and return an integer", () => {
		expect(add(testCase7)).to.equal(8);
	});
});

// Part 4
const testCase8 = "//;\n1;-5;-2"; // expect negative number exception
const testCase9 = "//;\n1;9;-1"; // expect negative number exception

describe("Part 4 - Negative Numbers throw and exception with the list of negatives", function () {
	it("should throw the exception: 'Negatives not allowed. The string contained -5, -2'", () => {
		expect(add(testCase8)).to.equal(
			"Negatives not allowed. The string contained -5, -2"
		);
	});
	it("should throw the exception: 'Negatives not allowed. The string contained -1'", () => {
		expect(add(testCase9)).to.equal(
			"Negatives not allowed. The string contained -1"
		);
	});
});

// Bonus 1 - exclude numbers above 1000
const testCase10 = "//;\n1;5;1001"; // expect 6
const testCase11 = "//;\n1;5;1000"; // expect 1006

describe("Bonus 1 - Do not include numbers above 1000 in the sum", function () {
	it("should include the number 1000 in the sum", () => {
		expect(add(testCase10)).to.equal(6);
	});
	it("should not include the number 1001 in the sum", () => {
		expect(add(testCase11)).to.equal(1006);
	});
});

// Bonus 2 - delimiters can be arbitrary length
const testCase12 = "//***\n1***2***3"; // expect 6
const testCase13 = "//;;;;;;;<<\n3;;;;;;;<<2;;;;;;;<<3"; // expect 8

describe("Bonus 2 - Delimiters can be of arbitrary length", function () {
	it("should sum the numbers correctly with multi-length delimiters", () => {
		expect(add(testCase12)).to.equal(6);
	});
	it("should sum the numbers correctly with multi-length delimiters", () => {
		expect(add(testCase13)).to.equal(8);
	});
});

// Bonus 3 - Allow multiple delimiters
const testCase14 = "//$,@\n1$2@3"; // expect 6
const testCase15 = "//$,@,*,#\n1*2#6$2@3"; // expect 14

describe("Bonus 3 - Allow Multiple Delimiters", function () {
	it("should sum the numbers correctly with multiple delimiters provided", () => {
		expect(add(testCase14)).to.equal(6);
	});
	it("should sum the numbers correctly with multiple delimiters provided", () => {
		expect(add(testCase15)).to.equal(14);
	});
});

// Bonus 4 - Allow multiple delimiters of arbitrary length
const testCase16 = "//$$,@@@\n1$$2@@@3"; // expect 6
const testCase17 = "//$$$$$,@,**,#\n1**2#6$$$$2@3"; // expect 14

describe("Bonus 4 - Allow Multiple Delimiters of arbitrary length", function () {
	it("should sum the numbers correctly with multiple delimiters provided", () => {
		expect(add(testCase16)).to.equal(6);
	});
	it("should sum the numbers correctly with multiple delimiters provided", () => {
		expect(add(testCase17)).to.equal(14);
	});
});
