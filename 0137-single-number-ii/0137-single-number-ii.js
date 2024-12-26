/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let x=nums.filter((v,index)=>nums.indexOf(v)===nums.lastIndexOf(v))
    
    
    return x[0];
};