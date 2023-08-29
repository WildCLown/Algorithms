/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
  let open = [0];
  let close = [0];
  let total = []
  for(let i = 0; i< customers.length; i++){
    customers[i] == 'Y'? close.push(close[i]) : close.push(close[i]+1)
    customers[customers.length-1-i] == 'N'?
      open.unshift(open[open.length-1-i]) : open.unshift(open[open.length-1-i] + 1)
  }
  let answer = 0;
  let min = Infinity;
  for(let i = 0; i<open.length; i++){
    let insert = open[i] + close[i];
    if(insert < min){
      answer = i;
      min = insert;
    }
    total.push(insert);
  }
  return answer;
};

/*
XYYYY
00000
01234 (Close 0)

XNNNN
01234 (Open til 0)
*/
