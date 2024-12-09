/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
   let x=n.toString().split("").map(Number) ;
    let pd=x.reduce((tot,val)=>tot*val);
    let sum=x.reduce((t,v)=>t+v);
    return pd-sum;
   
};