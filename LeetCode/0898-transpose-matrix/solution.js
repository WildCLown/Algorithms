/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let aux1 = matrix[0].length;
    let aux2 = matrix.length;
    let answer = new Array(aux1).fill().map(()=>Array(aux2));
    for(let i = 0; i<aux2; i++){
        for(let j = 0; j<aux1; j++){
            answer[j][i] = matrix[i][j];
        }
    }
    return answer;
};
