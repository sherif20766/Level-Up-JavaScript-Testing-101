import { hello, add, removeSNames } from "./App";

describe("hello", () => {
	it("should output hello" , () => {
		expect(hello()).toBe("hello");
	});
});

describe("add", () => {
	it("should add two numbers", () => {
		expect(add(1,2)).toBe(3);
		expect(add(2,3)).toBe(5);
		expect(add(-2,2)).toBe(0);
		expect(add(-2,-2)).toBe(-4);
		expect(add(12,2)).toBe(14);
	});
	it("should not add strings", () => {
		expect(add(2,"2")).toBe(null);
	});
	it("should not add object", () => {
		expect(add(2,{})).toBe(null);
	});
	it("should not add arrays", () => {
		expect(add(2,[])).toBe(null);
	});
});


describe("removeSNames", () => {
	it("should remove all s names" , () => {
		const names = ["Courtney", "Shaun", "Steve"]
		expect(removeSNames(names)).toContain("Courtney");
	});
	it("should not remove all other names" , () => {
		const names = ["Courtney", "Shaun", "Wes"]
		expect(removeSNames(names)).toContain("Courtney");
		expect(removeSNames(names)).toContain("Wes");
	});
	it("should account for case" , () => {
		const names = ["Courtney", "Shaun", "Wes", "shaun"]
		expect(removeSNames(names)).not.toContain("Shaun");
		expect(removeSNames(names)).not.toContain("shaun");
	});
})
