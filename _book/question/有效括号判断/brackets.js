const brackets = '({})';

function isValid(brackets){
  let valid = true;
  let stack = [];
  let bracketMap = {
    '(':')',
    '{':'}',
    '[':']'
  }
  for( key in brackets){
    const curChar = brackets[key];
    if(['(','{','['].includes(curChar)){  
      stack.push(curChar);   //左括号压入栈
    } else {
      let pop = stack.pop();  //非左括号，将左括号从栈中弹出
      if(curChar!==bracketMap[pop]){   //检查是不是跟左括号匹配的右括号
        return false
      }
    }
  }
  if(stack.length > 0) return false;   //匹配进行完之后，栈里是否还有元素，有则返回false，没有为true
  return valid;
}

let result = isValid(brackets)
console.log(result);