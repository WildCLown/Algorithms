/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    let upper = 1;
    for(let i = n+4; i>n;i--){
        upper*=i;
    }
    return upper/24;
};
