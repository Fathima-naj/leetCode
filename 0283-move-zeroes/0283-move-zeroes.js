/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let c=0;
    for(i=0;i<nums.length;i++){
        if(nums[i]!=0){
            nums[c]=nums[i];
            if(c!=i){
                nums[i]=0;
            }
            c++;
        }
            
    }
};