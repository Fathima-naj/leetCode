/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    const sortedDigits = (num) => num.toString().split('').sort().join('');

    const target = sortedDigits(n);
    
    for (let i = 0; i < 31; i++) {
        if (sortedDigits(1 << i) === target) return true;
    }
    
    return false;
};