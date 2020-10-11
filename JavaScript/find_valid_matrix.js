var rowSum = [3, 8];
var colSum = [4, 7];

/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
    // create new matrix dimensions
    const valid_matrix = new Array (rowSum.length);

    for (let i = 0; i < rowSum.length; i++)
    {
        valid_matrix[i] = new Array (colSum.length);

        for (let j = 0; j < colSum.length; j++)
        {
            valid_matrix[i][j] = Math.min(rowSum[i], colSum[j]);
            rowSum[i] -= valid_matrix[i][j];
            colSum[j] -= valid_matrix[i][j];
        }

    }

    return valid_matrix;
};

console.log(restoreMatrix(rowSum, colSum));