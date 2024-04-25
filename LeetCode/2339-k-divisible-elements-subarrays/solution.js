/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
var countDistinct = function(nums, k, p) {
    let set = new Set();
    for(let i = 0; i<nums.length;i++){
        let aux = [];
        let countNum = 0;
        for(let j = i; j<nums.length;j++){
            if(nums[j]%p == 0){
                countNum++;
                if(countNum > k){
                    break;
                }
            }
            aux.push(nums[j]);
            set.add(aux.join("-"));
        }
    }
    return set.size;
};
