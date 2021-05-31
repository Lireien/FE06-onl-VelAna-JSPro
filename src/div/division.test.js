import division from './division';

test('divide 10 / 2 to equal 5', () => {
  expect(division(10, 2)).toBe(5);
});

test('divide 10 / 3 to equal 3.33', () => {
  expect(division(10, 3)).toBeCloseTo(3.33);
});

test('divide true / 2 to equal 0.5', () => {
  expect(division(true, 2)).toBe(0.5);
});

test('divide true / 0 to equal Infinity', () => {
  expect(division(true, 0)).toBe(Infinity);
});

test('divide false / 0 to equal NaN', () => {
  expect(division(false, 0)).toBe(NaN);
});

test('divide `6` / `2` to equal 3', () => {
  expect(division(`6`, `2`)).toBe(3);
});