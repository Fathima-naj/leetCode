/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function(nums, k) {
    let sum=0;
for(i=0;i<nums.length;i++){
    let gt=true;
    if([i-k]!==undefined&& nums[i]<=nums[i-k]){
        gt=false;
    }else if([i+k]!==undefined && nums[i]<=nums[i+k]){
        gt=false
    }
    if(gt){
        sum+=nums[i]
    }
}
return sum
};