/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let start = 0;
    let end = arr.length;
    let answer = 0;
    while(true){
        let search = Math.trunc((start + end)/2);
        if(arr[search-1] < arr[search] && arr[search] > arr[search+1]){
            answer = search;
            break;
        }else if(arr[search-1] < arr[search] && arr[search] < arr[search+1]){
            start = search;
        }else{
            end = search;
        }
    }
    return answer;
};
