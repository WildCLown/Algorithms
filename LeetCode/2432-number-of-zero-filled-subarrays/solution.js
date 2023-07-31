/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let zeros = [];
    let answer = 0;
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] == 0){
            let aux = zerosQtt(nums,i);
            zeros.push(aux[0]);
            i = aux[1];
        }
    }
    for(let i = 0; i< zeros.length; i++){
        answer+= (zeros[i]*(zeros[i]+1))/2
    }
    return answer;
};

function zerosQtt(nums,index){
    let i = index+1;
    let answer = 1;
    while(i < nums.length){
        if(nums[i] == 0){
            answer++;
        }
        else{
            break;
        }
        i++;
    }
    return [answer,i];
}

/*
1 3 6 10 15
1 2 3  4  5
*/
