/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let answer = 0;
    let letters = {};
    if(s.length == 1) return 1;
    letters[s.charCodeAt(0)] = 1;
    for(let i = 0, j = 1; j<s.length;j++){
        if(letters[s.charCodeAt(j)] == 1){
            while(letters[s.charCodeAt(j)] > 0){
                letters[s.charCodeAt(i)]--;
                i++;
            }
        }
        letters[s.charCodeAt(j)] = 1;
        answer = Math.max(answer,(j-i)+1);
    }
    return answer;
};
