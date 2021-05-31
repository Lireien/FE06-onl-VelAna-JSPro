const subtraction = require('./subtraction');

test('subtract  5 - 2 to equal 3', () => {
  expect(subtraction(5, 2)).toBe(3);
});

test('subtract  5 - true to equal 4', () => {
  expect(subtraction(5, true)).toBe(4);
});

test('subtract  `6` - 3 to equal 4', () => {
  expect(subtraction(`6`, 3)).toBe(3);
});

test('subtract  `six` - 3 to equal NaN', () => {
  expect(subtraction(`six`, 3)).toBe(NaN);
});

test('subtract  false - 5 to equal -5', () => {
  expect(subtraction(false, 5)).toBe(-5);
});