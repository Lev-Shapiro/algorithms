// https://leetcode.com/problems/search-a-2d-matrix/description/

function searchMatrix(matrix: number[][], target: number): boolean {
    let lowX = 0, highX = matrix[0].length - 1, lowY = 0, highY = matrix.length - 1;

    const maxX = highX;

    while(lowX <= highX && lowY <= highY) {
        let midX = Math.floor((lowX + highX) / 2),
            midY = Math.floor((lowY + highY) / 2),
            midVal = matrix[midY][midX];

        const startX = matrix[midY][0],
            endX = matrix[midY][maxX];

        // base cases:
        if(matrix[midY][midX] === target) {
            return true;
        }

        if(startX <= target && target <= endX) {
            if(midVal < target) {
                lowX = midX + 1;
            } else if(midVal > target) {
                highX = midX - 1;
            }
        } else if (midVal < target) {
            lowY = midY + 1;
        } else if (midVal > target) {
            highY = midY - 1;
        }
    }

    return false;
};