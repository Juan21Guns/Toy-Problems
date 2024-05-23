const funcs = require('../problems/05232024');

test('length is at least 1 character long', () => {
  expect(funcs('')).toBe(false);
});

test('one parantheses to be true', () => {
    expect(funcs('()')).toBe(true);
});

test('one set of each to be true', () => {
    expect(funcs('()[]{}')).toBe(true);
});

test('one mismatch set to be false', () => {
    expect(funcs('(}')).toBe(false);
});

test('one random nested string to be true', () => {
    expect(funcs('()()()[]{}([]){((()))}')).toBe(true);
});

test('one mismatched random nested string to be false', () => {
    expect(funcs('()()()[]{}([]){((())))}')).toBe(false);
});