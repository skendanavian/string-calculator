const chai = require("chai");
const expect = chai.expect;

const addString = require("./index");

const testCase1 = "1,2,5"; //expect 8
const testCase2 = ""; // expect 0

describe("sum", function () {
	it("should add the numbers in the string", () => {
		expect(addString(testCase1)).to.equal(8);
	});
	it("should return 0 when given an empty string as input", () => {
		expect(addString(testCase2)).to.equal(0);
	});
});
