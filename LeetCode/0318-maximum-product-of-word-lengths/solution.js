/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let answer = 0;
    words.sort(function(a,b){return b.length - a.length});
    let letNum = [];
    let aux;
    for(let i =  0; i<words.length;i++){
        aux = {};
        for(let j = 0; j<words[i].length;j++){
            if(aux[words[i][j]]) continue;
            aux[words[i][j]] = true;
        }
        letNum.push([aux,words[i].length]);
    }
    for(let i = 0; i<words.length-1; i++){
        for(let j = i+1; j<words.length;j++){
            if(letNum[i][1]*letNum[j][1] < answer) break;
            if(canTry(letNum[i],letNum[j])){
                answer = Math.max(answer, letNum[i][1]*letNum[j][1]);
            }
        }
    }
    console.log(letNum);
    return answer;
};
function canTry(a,b){
    let aux = Object.keys(a[0]);
    let auy = Object.keys(b[0]);
    let answer = true;
    if(aux.length < auy.length){
        for(let i = 0; i<aux.length; i++){
            if(b[0][aux[i]]){
                answer = false;
                break;
            }
        }
    }else{
        for(let i = 0; i<auy.length; i++){
            if(a[0][auy[i]]){
                answer = false;
                break;
            }
        }
    }
    return answer;
}
/*
[{},x]

*/05
