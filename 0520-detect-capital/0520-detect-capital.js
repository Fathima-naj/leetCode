/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    
     if(word===word.toUpperCase()|| word===word.toLowerCase()){
        return true;
     }else if((word[0]+word.slice(1).toLowerCase())===word){
        return true
     }else{
        return false
     }
};