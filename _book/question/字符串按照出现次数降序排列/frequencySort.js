/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function (s) {
    // 用来统计字符次数用
  let map = new Map();
  let res = '';
  for (let k = 0; k < s.length; k++) {
      map.set(s[k], (map.get(s[k]) || 0) + 1)
  }
    // 排序，让字符多的在前面
  let arr = [...map].sort((a, b) => {
      return b[1] - a[1];
  });
    // 字符串重组
  for (let i = 0; i < arr.length; i++) {
      while (arr[i][1] > 0) {
          res += arr[i][0];
          arr[i][1]--;
      }
  }
  return res;
};
