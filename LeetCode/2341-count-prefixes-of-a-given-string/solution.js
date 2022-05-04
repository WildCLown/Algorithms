/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    let answer = 0;
    let sl = s.length
    for(let i = 0; i < words.length;i++){
        if(words[i].length > sl) continue
        if(s.substr(0,words[i].length) == words[i]) answer++;
    }
    return answer;
};
