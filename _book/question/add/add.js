const nums = [1,2,4,5,7,9],
target = 8;

  // function findNumer(nums,target){
  //   for(let i = 0;i<=nums.length;i++){
  //     for(let j = 0;j<=nums.length;j++){
  //       let sum = nums[i] + nums[j];
  //       if( sum == target){
  //         return [i,j]
  //       }
  //     }
  //   }
  // }

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
  console.log(result);