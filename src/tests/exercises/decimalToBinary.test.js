const decimalToBinary = require("../../exercises/decimalToBinary");

describe("Decimal to Binary function", () => {
  test("It should return '100101110' when 302 is given", () => {
    expect(decimalToBinary(302)).toBe("100101110");
  });
});
