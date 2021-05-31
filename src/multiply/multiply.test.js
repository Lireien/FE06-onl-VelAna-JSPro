import multiply from './multiply';

test('multiply  1 * 2 to equal 2', () => {
  expect(multiply(1, 2)).toBe(2);
});

test('multiply  4 * string to equal NaN', () => {
  expect(multiply(4, 'string')).toBe(NaN);
});

test('multiply  `2` * `3` to equal 6', () => {
  expect(multiply('2', '3')).toBe(6);
});

test('multiply  5 * true to equal 5', () => {
  expect(multiply(5, true)).toBe(5);
});