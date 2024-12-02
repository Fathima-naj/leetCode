/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let ans=[];
    let odd=[];
    for(i=0;i<nums.length;i++){
        if(nums[i]%2==0){
            ans.push(nums[i]);
        }else{
           odd.push(nums[i]);
        }
    }return ans.concat(...odd);
};