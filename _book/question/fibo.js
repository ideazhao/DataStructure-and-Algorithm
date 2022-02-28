//1.  粗糙版本
function fibo1(n) {

if (n ===1)return 1

    if (n ===2)return 1

    return fibo1(n -2) +fibo1(n -1)

}
// 尾递归优化
function fibo2(n, current =0, next =1) {
    if (n ===0) return 1
    if (n ===1) return next
    return fibo2(n -1, next, current + next)
}
console.log(fibo1(5))

const iNew = function (fn, ...rest) {
	let instance = Object.create(fn.prototype);
    let res = fn.apply(instance, rest);
    return res !== null && (typeof res === 'object' || typeof res === 'function') ? res : instance;
};

function myNew(fn,...rest){
    let instance = Object.create(fn.prototype)
    let res = fn.apply(instance,rest);
    if(res!== null && (typeof res === 'object' || typeof res === 'function')){
        return res
    }
    return instance
}

function isValid(srcStr){
    const charS = srcStr.split('')
    const len = charS.length;
    let stack = []
    let map = new Map()
    map.set('(',')')
    map.set('{','}')
    map.set('[',']')
    for(let i = 0;i<len;i++){
        if(map.has(charS[i])){
            if(stack.length && map.get(charS[i])!== stack.pop()){
                return false
            }
        } else {
            stack.push(charS[i])
        }
    }
    return stack.length == 0
}

