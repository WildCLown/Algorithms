/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    let ocurs = [];
    let possibilities = []
    let answer = -1;
    let aux = 0;
    for(let i = 0; i<number.length;i++){
        if(number[i]==digit){
            ocurs.push(i);
        }
    }
    for(let i = 0; i<ocurs.length;i++){
        aux = (number.substr(0,ocurs[i]) + number.substr(ocurs[i]+1,number.length))
        if(aux > answer){
            answer = aux;
        }
    }
    return answer;
};

// 5005215
// i = 3
//"299858953917872714814599237991174513476623756395992135212546127959342974628712329595771672911914471"
