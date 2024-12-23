/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let res;
     let x=nums.reduce((tot,v)=>tot*v)
     if(x>0){
        res=1;
     }else if(x<0){
        res= -1;
     }else{
        res= 0;
     }
     return res;
};