/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let dp = [1];
    for(let i = 0; i< amount; i++){
        dp.push(0);
    }
    for(let i = 0; i<coins.length;i++){
        for(let j = coins[i];j<dp.length;j++){
            dp[j]+= dp[j-coins[i]]
        }
    }
    return dp[amount];
};
/*
[0][1][2][3][4][5]
|1||0||0||0||0||0|
|1||1||1||1||1||1|
|1||1||2||2||3||3|
*/
