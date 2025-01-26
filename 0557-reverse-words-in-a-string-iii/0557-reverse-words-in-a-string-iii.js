/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
let w=s.split(' ')
let n=w.map(v=>v.split('').reverse().join('')).join(' ')
return n;
}