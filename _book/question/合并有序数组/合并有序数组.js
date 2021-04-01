//合并有序数组核心代码
/*
要点：
1、两个数组需要本身有序，这个方法不会帮你排序
2、没有创建新数组，不论是什么值，都往其中一个数组上面插入，这里选了nums1
3、从两个数组的末尾向前比较
*/

function mergeArray(nums1, nums2) {
  let m = nums1.length,n = nums2.length;
  //拿到结果数组的末尾位置，以便下面比较完元素大小之后从后往前插入元素
  let current = m + n - 1;  

  while (current >= 0) {

    //处理数组1比较完的情况
    if (m < 1) {
      nums1[current--] = nums2[--n];
      continue;
    }

    //处理数组2比较完的情况
    if (n < 1) {
      nums1[current--] = nums1[--m];
      continue;
    }

    //比较元素大小，插入结果数组，并更新比较位
    if (nums1[m - 1] > nums2[n - 1]) {  
      nums1[current--] = nums1[--m];
    } else {
      nums1[current--] = nums2[--n];
    }
  }
  return nums1;
};

let arr1 = [0,1,6,8]
arr2 = [0,1,2,3,7,9];

console.log(mergeArray(arr1,arr2));