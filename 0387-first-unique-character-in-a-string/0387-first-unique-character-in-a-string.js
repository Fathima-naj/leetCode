/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let x=s.split('');
    let y=x.filter(v=>x.indexOf(v)===x.lastIndexOf(v))
    if(y[0]==''){
        return -1
    }else{
        return x.indexOf(y[0]) 
    }
};