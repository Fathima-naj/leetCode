/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let ans;
    
    let x=( nums.filter(v=>nums.indexOf(v)===nums.lastIndexOf(v)))
    x.push(0)
    let y= x.reduce((tot,val)=>tot+val)
    return y
};