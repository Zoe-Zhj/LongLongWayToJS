/**
 * 显式装箱
 */
var str = new String('123');

/**
 * 隐式装箱
 *
 * 在读取num时，后台自动完成了三个步骤：
 * 1. 创建一个Number实例
 * 2. 在实例上调用指定的方法
 * 3. 销毁实例
 */
var num = 123;
num.toFixed(3);

/**
 * 拆箱
 */
object = new String('ss');
obj.toString = function () {
    console.log('excute toString()');
    return 'ss';
};
obj.valueOf = function () {
    console.log('excute valueOf()');
    return 'ss';
};

console.log('%c第一次执行:', 'color: red');
Number(obj);
obj + '1';
String(obj);

obj.valueOf = undefined;

console.log('%c第二次执行:', 'color: green');
Number(obj);
obj + '1';
String(obj);

obj.toString = undefined;

console.log('%c第三次执行:', 'color: blue');
Number(obj);
obj + '1';
String(obj);


/**
 * “nb”
 * 1、"undefined"[+!![]] + "[object object]"[!+[] + !![]]
 * 2、undefined[1] + [object object][2]
 */
([][[]] + [])[+!![]] + ([] + {})[!+[] + !![]];

