/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    return nums.filter((v)=>nums.indexOf(v)===nums.lastIndexOf(v))
};