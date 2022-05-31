/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    let set = new Set();
    let total = Math.pow(2,k);
    for(let i = k; i<=s.length; i++){
        set.add(s.substring(i-k,i));
        if(set.size == total) return true;
    }
    return false;
};
