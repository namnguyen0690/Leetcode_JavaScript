/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  var dp = [1, 1];
  for (i = 2; i <= n; i++) {
    dp[i] = 0;
    for (j = 1; j <= i; j++) {
      dp[i] += dp[i - j] * dp[j - 1];
    }
  }
  return dp[n];
};
