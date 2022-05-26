/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let answer = 0;
    n = n.toString(2)
    for(let i = 0; i<n.length; i++){
        answer+=(n[i]=='1')
    }
    return answer;
};
