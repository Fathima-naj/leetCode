/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
     let ans;
     ans= nums.filter(v=>nums.indexOf(v)===nums.lastIndexOf(v));
     return ans[0];
};