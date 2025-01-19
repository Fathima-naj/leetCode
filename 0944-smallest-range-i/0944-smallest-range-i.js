/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    let max=Math.max(...nums)
    let min=Math.min(...nums)
    if(max-min <= 2*k ) return 0;
    return max-min-2*k
};