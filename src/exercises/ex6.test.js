// ex6.test.js

// Importation des fonctions à tester depuis ex6.js
import { findMax, removeDuplicates, includesValue, sortArray } from './ex6';

// Test de la fonction findMax
describe('findMax function', () => {
  test('finds the maximum value in an array of numbers', () => {
    expect(findMax([3, 1, 4, 1, 5, 9, 2, 6, 5, 3])).toBe(9);
  });

  test('returns null for an empty array', () => {
    expect(findMax([])).toBeNull();
  });

  test('returns null for non-array input', () => {
    expect(findMax('invalid')).toBeNull();
  });
});

// Test de la fonction removeDuplicates
describe('removeDuplicates function', () => {
  test('removes duplicate values from an array', () => {
    expect(removeDuplicates([3, 1, 4, 1, 5, 9, 2, 6, 5, 3])).toEqual([3, 1, 4, 5, 9, 2, 6]);
  });

  test('returns null for non-array input', () => {
    expect(removeDuplicates('invalid')).toBeNull();
  });
});

// Test de la fonction includesValue
describe('includesValue function', () => {
  test('checks if an array includes a specific value', () => {
    expect(includesValue([3, 1, 4, 1, 5, 9, 2, 6, 5, 3], 5)).toBe(true);
  });

  test('returns false if the value is not found', () => {
    expect(includesValue([3, 1, 4, 1, 5, 9, 2, 6, 5, 3], 8)).toBe(false);
  });

  test('returns false for non-array input', () => {
    expect(includesValue('invalid', 5)).toBe(false);
  });
});

// Test de la fonction sortArray
describe('sortArray function', () => {
  test('sorts an array of numbers in ascending order', () => {
    expect(sortArray([3, 1, 4, 1, 5, 9, 2, 6, 5, 3])).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 6, 9]);
  });

  test('returns null for non-array input', () => {
    expect(sortArray('invalid')).toBeNull();
  });
});
