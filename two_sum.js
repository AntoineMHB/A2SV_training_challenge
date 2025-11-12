/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let resultArray = [];
  let difference = 0;
  for (let i = 0; i < nums.length; i++) {
    difference = target - nums[i];
    let diffIndice = nums.indexOf(difference);

    if (diffIndice !== -1 && diffIndice !== i) {
      return [i, diffIndice];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
