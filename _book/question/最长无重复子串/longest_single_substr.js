//大体思路：
// 一个Set结构存无重复的值
// 外层循环用于处理临时存储的字符串的长度
// 内层while循环用于增加无重复串的长度
// 逐个计算完之后，要么最长的长度是当前字符串的长度，要么是当前游标的位置和索引位间距离+1
let str = 'abdcdddbcdefgh'
function singleStr(str){
    let s = str.length,
    storeWrap = new Set();
    let lp = -1,  // 无重复字符串的游标
        preLen = 0; // 记录最长字符串的长度
    for(let i = 0; i < s;++i){
        if(i!=0){
            storeWrap.delete(str.charAt(i-1))
        }
        // 这里的while是会一次执行完的，理解这点是关键
        // 即当前游标往后无重复的字符串长度是一次性计算完毕的
        // 后面和前面的元素无重复的就加，有重复的就直接删，这样每次取到的都是当前能够取到的最长字符串
        while(lp + 1 < s && !storeWrap.has(str.charAt(lp + 1))){
            storeWrap.add(str.charAt(lp + 1))
            ++lp  // lp会随着这个循环累加到无重复字符串的末尾
        }
        preLen =  Math.max(preLen,lp - i + 1)
    }
    return preLen
}
console.log(singleStr(str))