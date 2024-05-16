function longestCommonSubsequence(firstString, secondString) {
    const m = secondString.length, n = firstString.length;
    const dp = new Array(m + 1);
    for (let i = 0; i < m + 1; i++) {
        if (i === 0) dp[i] = new Array(n + 1).fill(0); 
        else dp[i] = new Array(n + 1).fill(Infinity); 
        dp[i][0] = 0;
    }
    
   

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (secondString.charAt(i - 1) === firstString.charAt(j - 1)) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    console.table(dp)
    return dp[m - 1][n - 1];
}


// longestCommonSubsequence(horizontal, vertical)
console.log(longestCommonSubsequence('XYZYZ', 'ZXYYZ'));