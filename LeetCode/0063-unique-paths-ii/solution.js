/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid[obstacleGrid.length-1][obstacleGrid[0].length-1] == 1 || obstacleGrid[0][0] == 1){
        return 0;
    }
    let answerAux = [];
    for(let i = 0; i<obstacleGrid.length;i++){
        let arrAux = []
        for(let j = 0; j<obstacleGrid[0].length;j++){
            arrAux.push(0)
        }
        answerAux.push(arrAux);
    }
    answerAux[0][0] = 1;
    for(let i = 1; i<obstacleGrid.length;i++){
        if(obstacleGrid[i][0] == 1){
            break;
        }else{
            answerAux[i][0] = 1;
        }
    }
    for(let i = 1; i<obstacleGrid[0].length;i++){
        if(obstacleGrid[0][i] == 1){
            break;
        }else{
            answerAux[0][i] = 1;
        }
    }

    for(let i = 1; i<obstacleGrid.length; i++){
        for(let j = 1; j<obstacleGrid[0].length;j++){
            if(obstacleGrid[i][j] == 0){
                answerAux[i][j] = answerAux[i-1][j] + answerAux[i][j-1];
            }
        }
    }
    return answerAux[obstacleGrid.length-1][obstacleGrid[0].length-1]
};
