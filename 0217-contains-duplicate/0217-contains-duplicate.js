/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   let x= new Set(nums);
   if(x.size==nums.length){
    return false;
   }else{
    return true;
   }
        
        
    
};