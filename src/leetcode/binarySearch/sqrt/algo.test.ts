import { doSqrt } from "./algo";

test("doSqrt returns the closest integer of rounded down square root of x", () => {
  expect(doSqrt(1)).toEqual(1);
  expect(doSqrt(2)).toEqual(1);
  expect(doSqrt(3)).toEqual(1);
  expect(doSqrt(4)).toEqual(2);
  expect(doSqrt(5)).toEqual(2);
  expect(doSqrt(6)).toEqual(2);
  expect(doSqrt(7)).toEqual(2);
  expect(doSqrt(8)).toEqual(2);
  expect(doSqrt(9)).toEqual(3);
  expect(doSqrt(10)).toEqual(3);
});
