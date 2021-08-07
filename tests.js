const chai = require("chai");
const expect = chai.expect;

const { addString1, addString2, addString3 } = require("./index");

// Part 1
const testCase1 = "1,2,5"; // expect 8
const testCase2 = ""; // expect 0

describe("Part 1 - Comma Delimiter", function () {
	it("should add the numbers in the string correctly and return an integer", () => {
		expect(addString1(testCase1)).to.equal(8);
	});
	it("should return 0 when given an empty string as input", () => {
		expect(addString1(testCase2)).to.equal(0);
	});
});

// Part 2
const testCase3 = "1\n,2,3"; // expect 6
const testCase4 = "1,\n2,4"; // expect 7

describe("Part 2 - Comma and newline delimiter", function () {
	it("should add the numbers in the string correctly and return an integer", () => {
		expect(addString2(testCase3)).to.equal(6);
	});
	it("should return 0 when given an empty string as input", () => {
		expect(addString2(testCase4)).to.equal(7);
	});
});

// Part 3
const testCase5 = "//$\n1$2$3"; // expect 6
const testCase6 = "//@\n2@3@8"; // expect 13

describe("Part 3 - Custom delimiter ", function () {
	it("should add the numbers in the string correctly and return an integer", () => {
		expect(addString3(testCase5)).to.equal(6);
	});
	it("should return 0 when given an empty string as input", () => {
		expect(addString3(testCase6)).to.equal(13);
	});
});
