/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    let set = {};
    let answer = -1;
    for(let i = 0; i<cards.length;i++){
        if(set[cards[i]] != null){
            if(answer == -1){
                answer = (i+1) - set[cards[i]];
            }
            answer = Math.min((i+1) - set[cards[i]],answer);
            set[cards[i]] = i;
        }else{
            set[cards[i]] = i;
        }
    }
    return answer;
};
