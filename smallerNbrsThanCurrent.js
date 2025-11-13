/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let arrayOutput = [];
    
    for (let i = 0; i < nums.length - 1; i++) {
        let smallNbrs = 0;
       if (nums[i+1] < nums[i]) {
           smallNbrs ++;
       }


    }
    return smallNbrs;
    
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));