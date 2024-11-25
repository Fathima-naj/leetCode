/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
     let x=nums.filter((v,index)=>nums.indexOf(v)===index)
          let y=x.sort((a,b)=>b-a)
          if(y.length>=3){
            return y[2];
          }else{
            return y[0];
          }
       
};