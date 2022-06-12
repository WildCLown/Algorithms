/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
    let answer = 0;
    let tax = 0;
    let sum = brackets[0][0]
    for(let i = 1; i<brackets.length; i++){
        brackets[i][0] -= sum;
        sum+=brackets[i][0];
    }
    let aux;
    let aux2;
    while(income > 0 && brackets.length > 0){
        aux = brackets.shift()
        
        aux2 = Math.min(aux[0],income)*(aux[1]);
        income-= aux[0]
        answer+=aux2;
    }
    return answer/100;
};
