/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let cities = []; 
    for (let i = 0; i < paths.length; i++) {
        cities.push(paths[i][0]); 
    }

    
    for (let i = 0; i < paths.length; i++) {
        if (cities.indexOf(paths[i][1]) === -1) { 
            return paths[i][1];
        }
    }
};
