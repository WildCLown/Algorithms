/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let aux = x;
    let answer = 1;
    if(x == -1){
        if(n%2 == 0){
            return answer;
        }else{
            return answer*-1;
        }
    }else if(n == 0 || x == 1){
        return answer;
    }else{
        if(n%2 == 1){
            
        }
        for(let i = 0; i< Math.abs(n); i++){
            answer*=aux;
        }
    }
    if(n < 0){
        return 1 / answer;
    }
    return answer;
};
