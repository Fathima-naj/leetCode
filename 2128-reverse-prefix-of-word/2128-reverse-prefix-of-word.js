/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
   let index=word.indexOf(ch)
let w=word.slice(0,index+1).split('').reverse('').join('')
let r=word.slice(index+1)
return w+r
};