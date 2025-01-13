/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let w1=s1.split(' ')
    let w2=s2.split(' ')
    let word=w1.concat(w2)
    let z=word.filter((v)=>word.indexOf(v)===word.lastIndexOf(v))
    return z;
};