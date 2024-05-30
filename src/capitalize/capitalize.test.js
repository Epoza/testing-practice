const capitalize = require('./capitalize');

test('capitalize first character in a string', () => {
  expect(capitalize("hello how are you?")).toBe("Hello how are you?");
});