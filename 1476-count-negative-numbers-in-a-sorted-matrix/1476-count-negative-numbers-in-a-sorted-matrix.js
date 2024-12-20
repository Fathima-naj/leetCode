/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
   
    let x=grid.flat().filter(v=>v<0)
    return x.length;

};