global.___loader = {
  enqueue: jest.fn(),
};

Object.defineProperty(window.navigator, "userAgent", ((value) => ({
  get() { return value; },
  set(v) { value = v; }
}))(window.navigator["userAgent"]));