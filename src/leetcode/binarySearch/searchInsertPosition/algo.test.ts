import { searchInsert } from "./algo";

describe('searchInsertPosition', () => {
  test('find the index where it would be if it were inserted in order', () => {
    expect(searchInsert([1, 3, 5, 8], 5)).toEqual(2);
  });

  test('find the index where it would be if it were inserted in order', () => {
    expect(searchInsert([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toEqual(4);
  });

  test('should return the index where it would be if it were inserted in order', () => {
    expect(searchInsert([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)).toEqual(10);
  });
});