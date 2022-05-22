/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    let bag = [];
    let answer = 0;
    let itera = rocks.length
    for(let i = 0; i<itera;i++){
        bag.push(capacity[i]-rocks[i]);
    }
    bag.sort(function(a,b){return a-b});
    for(let i = 0; i< itera; i++){
        if(bag[i] > additionalRocks) break;
        additionalRocks-=bag[i];
        answer++;
        
    }
    return answer;
};
