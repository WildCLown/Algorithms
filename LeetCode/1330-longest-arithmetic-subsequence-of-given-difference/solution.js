/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    let aux = {}
    aux[arr[0]] = 1;
    let answer = 1;
    for(let i = 1; i< arr.length; i++){

        if(aux[arr[i] - difference] != undefined){
            aux[arr[i]] = aux[arr[i] - difference] + 1
            answer = Math.max(answer,aux[arr[i]])
        }else{
            aux[arr[i]] = 1;
        }
    }
    return answer;
};
