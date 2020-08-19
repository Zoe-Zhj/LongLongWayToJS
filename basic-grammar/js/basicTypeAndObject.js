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
 *
 * 当某个对象出现在需要原始类型才能进行操作的上下文时，JavaScript会自动将对象转化为原始类型。
 * 此过程由javaScript引擎内部的抽象操作 ToPrimitive(input, PreferredType) 函数执行。
 * 执行过程：默认情况下，先检查对象是否有 valueOf 方法，有则继续检查 valueOf 方法是否有基本类型的返回值；
 * 如果没有 valueOf 方法或 valueOf 方法没有返回值，则调用 toString 方法；
 * 如果 toString 方法也没有返回值，产生 TypeError 错误。
 * 若referredType值为string，则先调用 toString ,再调用 valueOf。
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

