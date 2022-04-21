//计算所有可能的奇数长度子数组的和
function sumOddLengthSubarrays( arr ) {
    var countArr = []
    for(let i=1;i<=arr.length;i++){
        if(i%2 === 1){
            countArr.push(i)
        }
    }
    var result = 0
    for(let i=0;i<countArr.length;i++){
        for(let j=0;j<arr.length;j++){
            var newArr = []
            if((j+countArr[i])<=arr.length){
                newArr = arr.slice(j,j+countArr[i])
                result += newArr.reduce((a,b)=> a+b)
            }
        }
    }
    return result
}
console.log(sumOddLengthSubarrays([1,4,2,5,3]))

    
