/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let aux = new Array(nums.length+1).fill(false);
    let answer = 0;
    for(let i = 0; i<nums.length; i++){
        aux[nums[i]] = true;
    }
    for(let i = 0; i<nums.length+1;i++){
        if(aux[i]) continue;
        answer = i;
        break;
    }
    return answer;
};
