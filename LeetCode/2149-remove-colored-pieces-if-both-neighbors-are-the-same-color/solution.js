/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    let plays = [0,0]; //A and B
    if(colors.length == 1 || colors.length == 2) return plays[0] > plays[1];
    for(let i = 0; i< colors.length; i++){
        let obj = countLetters(colors, colors[i], i);
        if(obj['value'] > 2){
            colors[i] == 'A' ? plays[0]+=obj['value']-2 : plays[1]+=obj['value']-2
        }
        i = obj['i'];
    }
    return plays[0] > plays[1];
};

function countLetters(colors, letter, position){
    let answer = 1;
    let lastPosition = position+1;
    for(lastPosition; lastPosition<colors.length && colors[lastPosition] == letter; lastPosition++){
        answer++;
    }
    lastPosition--;
    return { 
            i: lastPosition,
            value: answer
        }
}
