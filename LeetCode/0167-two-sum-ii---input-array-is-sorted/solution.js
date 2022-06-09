/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let aux = {}
    let laux;
    let answer;
    for( let i = 0; i < numbers.length; i++){
        if(aux[numbers[i]] == null) aux[numbers[i]] = []
        aux[numbers[i]].push(i);
    }
    for( let i = 0; i < numbers.length; i++){
        laux = target - numbers[i];
        if(aux[laux]){
            if(laux == numbers[i]){
                if(aux[laux].length > 1){
                    answer = [i+1, aux[laux][1]+1];
                    break;   
                }else continue;
            }else{
                answer = [i+1, aux[laux][0]+1]
                break;   
            }
        }
    }
    return answer;
};
