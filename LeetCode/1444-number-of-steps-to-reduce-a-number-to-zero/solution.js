/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let answer = 0;
    while(num != 0){
        if(num%2){
           num-=1;
        }else{
            num/=2;
        }
        answer++;
    }
    return answer;
};
