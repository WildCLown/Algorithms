/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a,b) => {return b-a})
    let answer = 0;
    let current = -1
    for(let i = 0; i< k && current != 0; i++){
        current = Math.max(0,happiness[i] - i)
        answer+=current
    }
    return answer;
};
