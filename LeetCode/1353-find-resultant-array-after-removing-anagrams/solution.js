/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    let wm = new Array(words.length).fill().map(()=>Array(26).fill(0));
    let answer= [];
    let last = "";
    let aux;
    for(let i = 0; i<words.length; i++){
        for(let j = 0; j<words[i].length;j++){
            wm[i][words[i].charCodeAt(j)-97]++;
        }
        aux = wm[i].join('|');
        if(aux != last){
            answer.push(words[i]);
            last = aux;    
        }
    }
    //console.log(wm);
    return answer;
};

/*
26
"a2b2"
"a2b2"
"a2b2"
"c1d1"
"c1d1"
*/
