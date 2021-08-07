const chai = require("chai");
const expect = chai.expect;

const { add } = require("./index");

// Part 1
const testCase1 = "1,2,5"; // expect 8
const testCase2 = ""; // expect 0

// Part 2
const testCase3 = "1\n,2,3"; // expect 6
const testCase4 = "1,\n2,4"; // expect 7

// Part 3
const testCase5 = "//$\n1$2$3"; // expect 6
const testCase6 = "//@\n2@3@8"; // expect 13
const testCase7 = "//;\n1;3;4"; //expect 8

// Part 4
const testCase8 = "//;\n1;-5;-2"; // expect negative number exception
const testCase9 = "//;\n1;9;-1"; // expect negative number exception

describe("Part 1 - Comma Delimiter and Empty Strings return 0", function () {
	it("should add the numbers in the string correctly and return an integer", () => {
		expect(add(testCase1)).to.equal(8);
	});
	it("should return 0 when given an empty string as input", () => {
		expect(add(testCase2)).to.equal(0);
	});
});
describe("Part 2 - Comma and Newline Delimiter", function () {
	it("should add the numbers in the string correctly and return an integer", () => {
		expect(add(testCase3)).to.equal(6);
	});
	it("should add the numbers in the string correctly and return an integer", () => {
		expect(add(testCase4)).to.equal(7);
	});
});
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
