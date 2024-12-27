/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const x=nums.sort(function(a,b){
       return b-a;
    })
    return x[k-1];
};