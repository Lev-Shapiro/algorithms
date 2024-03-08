// Leetcode problem: https://leetcode.com/problems/sqrtx/

export const doSqrt = (x: number) => {
  let low = 0,
    high = Math.floor(x / 2);

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    const prevX = mid * mid;
    const nextX = (mid + 1) * (mid + 1);

    if (prevX <= x && x < nextX) {
      return mid;
    }

    if (prevX < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
};
