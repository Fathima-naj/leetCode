/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let p=0;
    let n=0;
    for(i=0;i<nums.length;i++){
           if(nums[i]<0){
            n++;
           }else if(nums[i]>0){
            p++
           }
    }
    return Math.max(p,n)
};