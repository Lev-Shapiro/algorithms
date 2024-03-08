/**
 * Performs the quicksort algorithm on an array (Complexity: O(n log n))
 * @param arr array to sort
 * @returns sorted array
 */
export const qsort = (arr: number[]): number[] => {
    if (arr.length < 2) return arr;

    const ref = arr[0];

    const left = [],
        right = [];

    for (var i = 1; i < arr.length; i++) {
        const v = arr[i];

        v > ref ? right.push(v) : left.push(v);
    }

    return [...qsort(left), ref, ...qsort(right)];
};
