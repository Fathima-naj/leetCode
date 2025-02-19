/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let diff=[]
for(i=0;i<nums.length;i++){
    if(nums[i+1]!==undefined){
        diff.push(Math.abs(nums[i]-nums[i+1]))
    }else{
        diff.push(Math.abs(nums[0]-nums[nums.length-1]))
    }
}
return Math.max(...diff)
};