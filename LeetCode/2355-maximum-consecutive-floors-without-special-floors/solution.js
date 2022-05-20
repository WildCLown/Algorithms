/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
var maxConsecutive = function(bottom, top, special) {
    let answer = 0;
    special = special.sort(function(a,b){return a-b});
    if(special[0] != bottom){
        answer = special[0] - bottom;
    }
    if(special[special.length-1] != top){
       answer = Math.max(answer, top - special[special.length-1]);
    }
    for(let i = 0; i<special.length-1;i++){
        answer = Math.max((special[i+1] - special[i])-1, answer);
    }
    return answer;
};
