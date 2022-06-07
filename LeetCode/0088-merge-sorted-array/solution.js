/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let answer = [];
    if(n == 0) return nums1;
    while(nums1.length != m) nums1.pop();
    while(true){
        if(nums1.length == 0){
            answer.push(...nums2);
            break;
        }
        if(nums1[0] <= nums2[0]){
            answer.push(nums1.shift());
        }else{
            answer.push(nums2.shift());
            if(nums2.length == 0){
                answer.push(...nums1);
                break;
            }
        }
    }
    console.log(answer);
    while(nums1.length > 0) nums1.pop();
    while(answer.length > 0) nums1.push(answer.shift());
    return nums1
};
