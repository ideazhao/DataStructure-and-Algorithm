/**
 * 两个字符串序列的最长子序列的长度
 */
function lcs(X,Y){
  const xlen = X.length
  const ylen = Y.length
  const res = []

  //以两个字符串的长度为维度构建一个二维数组
  //每项设置为0
  for(let i = 0;i <= xlen;i++){
    res[i] = []
    for(let j = 0;j <= ylen;j++){
      res[i][j] = 0
    }
  }

  for(let i = 0;i <= xlen;i++){
    for(let j = 0;j <= ylen;j++){
      //数组第一行和第一列设为0
      if(i === 0 || j === 0){
        res[i][j] = 0
      } else if(X[i - 1] === Y[j - 1]){
        //当遇到字符串中有相同项，取二维数组中的前一项加1，给到当前项
        res[i][j] = res[i - 1][j - 1] + 1
      } else {
        // 如果既不等于0，也不相等，就取X或者Y中遍历位置更长的那个来为res[i][j]赋值
        const a = res[i - 1][j]
        const b = res[i][j - 1]
        res[i][j] = a > b ? a : b
      }
    }
  }
  //所以整个的原理是：
  //以字符串的字符索引来建立二维数组
  //在比较字符的过程中对数组的格子进行赋值，这个值就是公共子串的长度
  //如果相等，在上一个比较完的格子基础上加1，赋值给当前格子
  //如果不等，同样取上一个比较完的格子，但需要取较大的那个值，即被加1之后的长度值，以保持这个值在一直向后积累推进
  //直到最后一个格子，要么是相等之后再加1的取值，要么是之前比较完的最大长度被传递了过来
  //所以右下角就是答案
  return res[xlen][ylen]
}

const a = 'hello world'
const b = 'haelalo wor13'

let str = lcs(a,b)
console.log(str)