const calculator = require('./calculator');

test('adding two numbers', () => {
  expect(calculator.add(10, 2)).toBe(12);
});

test('subtracting two numbers', () => {
    expect(calculator.subtract(10, 2)).toBe(8);
});

test('dividing two numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test('multiplying two numbers', () => {
    expect(calculator.multiply(10, 2)).toBe(20);
});



