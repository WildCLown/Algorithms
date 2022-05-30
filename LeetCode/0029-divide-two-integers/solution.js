/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let aux = Math.trunc(dividend/divisor)
    if(aux >= 2147483648){
        aux = 2147483647;
    }else if(aux < -2147483648){
        aux = -2147483648;
    }
    return aux;
};
