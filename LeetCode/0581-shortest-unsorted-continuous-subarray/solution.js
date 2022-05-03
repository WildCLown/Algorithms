/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let aux = [...nums];
    let min = nums.length;
    let max = 0;
    aux.sort(function(a,b){ return a-b});
    for(let i = 0; i< nums.length;i++){
        min = nums[i] != aux[i] ? Math.min(i, min) : min;
        max = nums[i] != aux[i] ? Math.max(i, max) : max;
    }
    //console.log(min + " and " + max);
    return min<max? max - (min-1) : 0;
};
