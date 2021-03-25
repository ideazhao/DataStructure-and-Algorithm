## 两数相加

求数组中哪两个数的和等于目标值。

### 常规思路

双层遍历查找符合条件的元素。

不知你是否跟我一样，一听到遍历就浑身一麻，全都查一遍多费力。

```
const nums = [1,2,4,5,7,9],
target = 8;

function findNumer(nums,target){
  for(let i = 0;i<=nums.length;i++){
    for(let j = 0;j<=nums.length;j++){
      let sum = nums[i] + nums[j];
      if( sum == target){
        return [i,j]
      }
    }
  }
}
let result = findNumer(nums,target);
console.log(result);  //[0,4]
```

如果有办法尽可能地减少查询次数，即降低时间复杂度，就好了。

当然有。

### 求和转求差

当第一次遍历的时候，我们能拿到什么？拿到前面所有见过的值。

我们还知道什么？目标值。

那么，如果“目标值 - 当前拿到的值 = 拿到过的值之一”，不就解决了，还用往后看么？

上代码：

```
const nums = [1,2,4,5,7,9],
target = 8;

function findNumer(nums,target){
  let numMap = new Map();
  for(let i = 0;i<=nums.length;i++){
    const diff = target - nums[i];  //求差
    if(numMap.has(diff)){
      return [numMap.get(diff),i]   //存在即可停止
    }
    numMap.set(nums[i],i)   //否则加入map继续向后看
  }
}

let result = findNumer(nums,target);
console.log(result);  //[0,4]
```