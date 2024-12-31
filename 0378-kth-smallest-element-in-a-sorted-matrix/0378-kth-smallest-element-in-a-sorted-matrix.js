/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let x=matrix.flat()
    let y=x. sort(function(a,b){
        return a-b})
    return y[k-1];
};