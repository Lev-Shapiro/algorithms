import { isPoligram } from "./algo";

describe("isPoligram", () => {
    test("returns 1 when input is a palindrome with an odd number of characters", () => {
        expect(isPoligram("racecar")).toBe(1);
    });

    test("returns 1 when input is a palindrome with an even number of characters", () => {
        expect(isPoligram("deed")).toBe(1);
    });

    test("returns 1 when input is not a palindrome but has all unique characters", () => {
        expect(isPoligram("abcdefg")).toBe(0);
    });

    test("returns 0 when input is not a palindrome and has repeating characters", () => {
        expect(isPoligram("hello")).toBe(0);
    });
});
