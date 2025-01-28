/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let c=celsius + 273.15;
    let k= (celsius * 1.80) +32.00;
    let ans=[c,k]
    return ans
};