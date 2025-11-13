/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let indices = 0;
    const expected = [...heights].sort((a, b) => a -b);
    console.log(expected);
    
    for (let i = 0; i < heights.length; i++) {
            if (heights[i] !== expected[i]) {
                indices = indices + 1;
            }
        
    }
    
    return indices;
    
};

console.log(heightChecker([1,1,4,2,1,3]));