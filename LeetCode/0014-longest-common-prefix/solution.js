/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let answer = strs[0];
    let aux = answer.length;
    if(strs.length == 1){
        return answer;
    }
    for(let i = 1; i < strs.length && aux > 0; i++){
        for(let j = 0; j<aux; j++){
            if(strs[i][j] != answer[j]){
                aux = j;
                answer = answer.substr(0,j);
            }
        }
    }
    return answer;
};
