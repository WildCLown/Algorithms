/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    if(s.length == 1) return s
    const maxHeap = new MaxPriorityQueue();
    let lettermap = {};
    for (let char of s) {
        lettermap[char] = (lettermap[char] || 0) + 1;
    }
    for (let char in lettermap) {
        maxHeap.enqueue(char, lettermap[char]);
    }
    let checkChar = maxHeap.dequeue().element
    let answer = checkChar;
    lettermap[checkChar]--;
    lettermap[checkChar] == 0 ? "":maxHeap.enqueue(checkChar, lettermap[checkChar])
    while(!maxHeap.isEmpty()){
        //console.log(answer)
        checkChar = maxHeap.dequeue().element;
        if(checkChar ==  answer[answer.length-1]){
            if(maxHeap.isEmpty()) return "";

            let check2Char = maxHeap.dequeue().element;
            answer = answer + check2Char;
            lettermap[check2Char]--;
            lettermap[check2Char] == 0 ? "":maxHeap.enqueue(check2Char, lettermap[check2Char])
            maxHeap.enqueue(checkChar, lettermap[checkChar])
        }else{
            answer = answer + checkChar;
            lettermap[checkChar]--;
            lettermap[checkChar] == 0 ? "":maxHeap.enqueue(checkChar, lettermap[checkChar])
        }
    }

    return answer;
};
