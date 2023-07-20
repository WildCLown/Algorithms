/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    var answer = [];
    for(let i = 0; i< asteroids.length; i++){
        if(
            (answer.length == 0) ||
            (answer[answer.length -1] > 0 && asteroids[i] > 0) ||
            (answer[answer.length -1] < 0)
        ){
            answer.push(asteroids[i]);
        }else{
            let check = true;
            while(check){
                if(answer.length == 0 || answer[answer.length -1] < 0){
                    check = false;
                    answer.push(asteroids[i]);
                }else if(Math.abs(answer[answer.length -1]) == Math.abs(asteroids[i])){
                    answer.pop();
                    check = false;
                }else if(Math.abs(answer[answer.length -1]) < Math.abs(asteroids[i])){
                    answer.pop();
                }else{
                    check = false;
                }
            }
        }
    }

    return answer;
};
