/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */
// 只处理英文字符（题目忽略大小写，我们前面全部转化成了小写， 因此这里我们只判断小写）和数字
// function isValid(c) {
//   const charCode = c.charCodeAt(0);
//   const isDigit =
//     charCode >= "0".charCodeAt(0) && charCode <= "9".charCodeAt(0);
//   const isChar = charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0);

//   return isDigit || isChar;
// }
/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function (s) {
//   s = s.toLowerCase();
//   let left = 0;
//   let right = s.length - 1;

//   while (left < right) {
//     if (!isValid(s[left])) {
//       left++;
//       continue;
//     }
//     if (!isValid(s[right])) {
//       right--;
//       continue;
//     }

//     if (s[left] === s[right]) {
//       left++;
//       right--;
//     } else {
//       break;
//     }
//   }

//   return right <= left;
// };

//没有字符验证的核心代码
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    //若值相等则位置从两端向中间移动
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      //回文必对称，两端值不等直接判错
      break;
    }
  }
  //单个字符和空串也算回文，如需区分可添加条件
  return right <= left;  
};

let testStr= "a"

console.log(isPalindrome(testStr));