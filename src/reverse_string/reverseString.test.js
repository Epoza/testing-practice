const reverse = require('./reverseString');

test('capitalize first character in a string', () => {
  expect(reverse("hello")).toBe("olleh");
});