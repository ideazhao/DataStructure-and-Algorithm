var lengthOfLIS = function(nums) {
    if (nums.length === 0) return 0;
    // 生成对应的数组,存储与之对应的最长子序列的长度
    // dp = [1, 1, 1, 1, 1, 1, 1, 1]
    let dp = Array.from(Array(nums.length), () => 1);
    // 遍历数组，判断到了当前位置时，长度为多少
    for (let i = 0; i < nums.length; i++) {
        // 遍历当前位置之前所有存储过的长度
        for (let j = 0; j < i; j++) {
            // 判断当前位置num是否比前面的num大，大的话就在其长度上+1，并取最大值
            nums[i] > nums[j] && (dp[i] = Math.max(dp[i], dp[j] + 1))
        }
    }
    // 返回最长的长度
    return Math.max(...dp) 
};