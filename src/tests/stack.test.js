const Stack = require("../stack");

/**
 * @type {Stack}
 */
let stack;

describe("Stack data structure", () => {
  beforeEach(() => {
    stack = new Stack();
  });

  test("isEmpty() should return true", () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test("isEmpty() should return false", () => {
    stack.push(5);
    stack.push(8);

    expect(stack.isEmpty()).toBe(false);
  });

  test("peek() should return latest item pushed", () => {
    stack.push(5);
    stack.push(8);

    expect(stack.peek()).toBe(8);
  });

  test("size() should return length of the internal array", () => {
    stack.push(5);
    stack.push(8);

    expect(stack.size()).toBe(2);
  });

  test("pop() should remove the latest item added", () => {
    stack.push(5);
    stack.push(8);

    stack.pop();

    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe(5);
  });

  test("toString() should return the string representation of the stack", () => {
    stack.push(5);
    stack.push(8);

    expect(stack.toString()).toBe("5, 8");
  });
});
