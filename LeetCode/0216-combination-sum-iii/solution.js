/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var answer = [];
var theK;
var theN;
var combinationSum3 = function(k, n) {
    theN = n;
    theK = k;
    let answerAux = [];
    let bbound = [];
    for(let i = 1; i<=9; i++){
        branBound([i],i,1);    
    }
    answerAux = [...answer];
    answer = [];
    return answerAux; 
};
function branBound(array,total,qtt){
    for(let i = 9; i>array[qtt-1];i--){
        if(total + i < theN && qtt+1 < theK){
            array.push(i);
            branBound([...array], total+i,qtt+1);
            array.pop();
        }else if(total + i == theN && qtt+1 == theK){
            array.push(i);
            answer.push(array);
            break;
        }
    }
}
