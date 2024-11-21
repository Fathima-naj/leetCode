/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let ans;
    for(i=0;i<nums.length;i++){
        ans= fn(init,nums[i]);
       init=ans;
        
    }return init;
};