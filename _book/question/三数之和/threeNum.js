/**
 * 
 * @param {*} List 
 * 1、先排序
 * 2、固定一个数字i
 * 3、剩余数字中找到两个值为-i，化为两数之和问题
 * 4、第一个方法中保证找过的i不重复
 * 5、第二个方法中保证找过的j不重复
 * @returns 
 */

let testThreeArr = [-1,0,1,2,-1,-4]
function threeNumAdd(List,target){
    let result = new Set() //用于存放结果
    const len = List.length
    if(len >= 3){
        List.sort() //先排序
        let i = 0
        while(i < len - 2){
            twoNumAdd(List,i,result,target);
            let temp = List[i]
            // 值相同的i不用再找
            while(i < List.length && List[i] == temp){
                ++i
            }
        }
    }
    return result
}

function twoNumAdd(List,i,result,target){
    let j = i+1,
    k = List.length - 1
    while( j < k ){
        // 满足条件，添加到集合中
        if(List[i] + List[j] + List[k] == target){
            result.add([List[i],List[j],List[k]])
            let temp = List[j]
            // 值相同的j就不用再找了
            while(List[j] == temp && j < k){
                ++j
            }
            // 此处与两数相加逻辑相同，不等的时候移动j或者k
            // 小于目标值移动前指针
            // 大于目标值移动后指针
        } else if(List[i] + List[j] + List[k] < target){
            ++j
        } else {
            --k
        }
    }
}
console.log(threeNumAdd(testThreeArr,1))

// console.log(twoNumAdd(testArr,8))