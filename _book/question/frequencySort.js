//将字符串以字符出现次数为准进行排序输出
function frequencySort( str ) {
    var lenStore = new Map()
    var strArr = []
    var arr = str.split('')
    for(let i = 0;i < arr.length;i++){
        if(lenStore.has(arr[i])){
            let count = lenStore.get(arr[i])+1
            lenStore.set(arr[i],count)
        }
        else{
            lenStore.set(arr[i],1);
        }
    }
    // 拿到长度
    for(let [key,value] of lenStore){  
        var i = 0; //单个字符计数游标
        let strCell = ''  //单个字符单元
        while(i < value){  
            strCell += key // 用于拼接某个长度的字符
            i++  //比较完后右移，直到当前字符结束
        }
        // 这一步执行完之后，具备某个长度的字符就拼接完毕，推入待排序数组
        strArr.push(strCell)
    }
    strArr.sort((a,b)=>{
        return b.length - a.length
    })
    return strArr.join('')
}
console.log(frequencySort('Aabbccc'))

