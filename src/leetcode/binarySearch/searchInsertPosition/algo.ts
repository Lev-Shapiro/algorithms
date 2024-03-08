export const searchInsert = (nums: number[], target: number): number => {
  let low = 0,
    high = nums.length - 1,
    mid: number = -1;

  // While you haven't narrowed it down to one element
  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  // Return the index where it would be if it were inserted in order
  return low;
};
