/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let n = arr.length;
    let t = Math.floor(n / 4); 

    for (let i = 0; i < n; i++) {
        if (arr[i] === arr[i + t]) { 
            return arr[i]; 
        }
    }

    return -1;
};