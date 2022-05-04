/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
    let pd = [nums[0]];
    let aux = Infinity;
    let aux2;
    let answer = 0;
    let func;
    let nl = nums.length-1;
    for(let i = 1; i<nl+1;i++){
        pd.push(nums[i] + pd[i-1]);
    }
    for(let i = 0; i<nl+1;i++){
        func = Math.floor((pd[nl] - pd[i])/ (nl-i)); 
        aux2 = Math.abs(
            Math.floor(pd[i]/(i+1)) - (func?func:0)
        )
        if(aux2 < aux){
            answer = i;
            aux = aux2;
        }
    }
    return answer;
};
