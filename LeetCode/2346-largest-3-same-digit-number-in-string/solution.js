/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let answer = "";
    let max = -1;
    for(let i = 0; i<num.length-2;i++){
        if(num[i] == num[i+1] && num[i] == num[i+2]){
            if(num[i] > max){
                answer = num.substr(i,3);
                max = num[i];
            }
        }
        if(max == 9) break;
    }
    return answer;
};
