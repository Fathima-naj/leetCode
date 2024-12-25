/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let w=s.trim();
   let arr=w.split(' ')
   return arr[arr.length-1].length;
};