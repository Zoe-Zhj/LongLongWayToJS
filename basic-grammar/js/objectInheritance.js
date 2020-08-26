/**
 * ********************构造函数********************
 * 函数体内部使用代表对象实例的this关键字
 * 生成对象时必须使用new命令
 */

/**
 * 构造函数
 * @param name
 * @param color
 * @constructor
 */
function Dog(name, color) {
    this.name = name;
    this.color = color;

    this.bark = function () {
        console.log('汪汪汪');
    }
}

/**
 * 生成对象实例
 * @type {Dog}
 */
var snow = new Dog('Snow', 'white');
var black = new Dog('Little Black', 'black');

/**
 * 判断实例是否共享属性/方法
 */
console.log('两个对象实例的属性是否相等>>>>>>>>>>>>>>>>>>>>', snow.bark === black.bark);
