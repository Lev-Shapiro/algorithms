import { qsort } from "./algo";

describe('qsort', () => {
  test('should return an empty array when given an empty array', () => {
    expect(qsort([])).toEqual([]);
  });

  test('should return the same array when given an array with only one element', () => {
    expect(qsort([1])).toEqual([1]);
  });

  test('should return a sorted array when given an unsorted array of numbers', () => {
    expect(qsort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
  });

  test('should return a sorted array when given a sorted array of numbers', () => {
    expect(qsort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});