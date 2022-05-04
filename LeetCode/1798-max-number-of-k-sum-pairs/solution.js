/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let answer = 0;
    let numsMap = {};
    for(let i = 0; i<nums.length;i++){
        if(numsMap[k - nums[i]] && numsMap[k - nums[i]] > 0){
            answer++;
            numsMap[k - nums[i]]--;
        }else{
            numsMap[nums[i]] = numsMap[nums[i]]? numsMap[nums[i]]+1:1;
        }
    }
    return answer;
};
