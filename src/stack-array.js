const items = new WeakMap();

class Stack {
  constructor() {
    items.set(this, []);
  }

  push(element) {
    const s = items.get(this);
    s.push(element);
  }

  pop() {
    const s = items.get(this);
    s.pop();
  }

  peek() {
    const s = items.get(this);
    return s[s.length - 1];
  }

  isEmpty() {
    const s = items.get(this);
    return s.length === 0;
  }

  clear() {
    items.set(this, []);
  }

  size() {
    const s = items.get(this);
    return s.length;
  }
}

module.exports = Stack;
