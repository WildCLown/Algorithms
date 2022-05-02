/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let answer = [];
    for(let i = 0; i<nums.length;i++){
        if(nums[i]%2 == 0){
           answer.unshift(nums[i]);
        }else{
            answer.push(nums[i]);
        }
    }
    return answer;
};
