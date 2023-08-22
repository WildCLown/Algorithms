/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let answer = "";
    const baseChar = 64;// A -1
    let actualCheck = columnNumber;
    while(actualCheck > 26){
        let modNum = actualCheck%26;
        let letter = modNum? String.fromCharCode(64+modNum) : String.fromCharCode(64+26)
        answer = letter + answer;
        actualCheck = modNum? Math.floor(actualCheck/26) : Math.floor(actualCheck/26)-1;
    }
    answer = String.fromCharCode(64+actualCheck) + answer;
    return answer;
};

/*
1 = A
26 = Z
27 = AA
52 = ZZ

*/
