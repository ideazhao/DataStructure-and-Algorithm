## 验证有效括号

关键词：**栈、括号匹配**

## 思路

一串字符串，里面的括号是否正确闭合，按照人的正常思维（用眼看），是这样的：

括号是先要左括号，再有右括号，成双匹配正确才算正确。

看到一个左括号，先记着，又看到一个左括号，再记着，一直往后...直到碰到一个不是左括号的字符，看是否跟之前的匹配，匹配的话，最近的那个左括号就可以不管了，继续向下看，直到完全匹配。

对程序来说，前面的过程是一样的，后面则是这样：

碰到非左括号的字符，看它是不是右括号，如果是，将之前最后一个推入栈的“左括号”弹出，检查二者是否匹配，若匹配。继续重复以上步骤。

当字符串遍历完毕，因为匹配的括号都已被弹出，栈里的元素逐步减少，所以再检查栈里是否还有剩下未匹配的左括号，如果没有，就代表全部匹配成功，括号均正确闭合，返回true，如果还有，代表没有完全正确闭合，返回false。

## 需要用到的工具

- 一个可能含有括号的字符串
- 一个用于存放左括号的栈
- 一个验证合格的标识（非必须，但可加强语义，更易读）

代码：

```
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
      stack.push(curChar);
    } else {
      let pop = stack.pop();
      if(curChar!==bracketMap[pop]){
        return false
      }
    }
  }
  if(stack.length > 0) return false;
  return valid;
}

let result = isValid(brackets)
console.log(result);
```