/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let count = new Array(26).fill(0);
    for(let i = 0; i< s.length; i++){
        count[s.charCodeAt(i) - 97]++;
    }
    return Math.floor(count[letter.charCodeAt(0) -97 ]/s.length * 100)
};
