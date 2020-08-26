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
 * 创建对象实例
 * @type {Dog}
 */
var snow = new Dog('Snow', 'white');
var black = new Dog('Little Black', 'black');

/**
 * 判断实例是否共享属性/方法
 */
console.log('两个对象实例的name属性是否相等>>>>>>>>>>>>>>>>>>>>', snow.name === black.name);
console.log('两个对象实例的bark方法是否相等>>>>>>>>>>>>>>>>>>>>', snow.bark === black.bark);


/**
 * ********************函数的prototype属性********************
 * 每一个函数都有一个prototype属性，即实例对象的原型对象
 * 原型对象的属性不属于实例自身
 * 修改原型对象，变动会立即体现在所有实例对象上
 */
function f() {}
console.log('typeof f.prototype 结果>>>>>>>>>>>>>>>>>>>>', typeof f.prototype);

function Mammal(name, species) {
    this.name = name;
    this.species = species;
}

/**
 * 在原型对象上添加属性
 * @type {string}
 */
Mammal.prototype.type = 'mammal';

/**
 * 在原型对象上添加方法
 * @returns {*}
 */
Mammal.prototype.getName = function () {
    return this.name;
};

/**
 * 创建对象实例
 * @type {Mammal}
 */
var tom = new Mammal('Tom', 'cat');
var jerry = new Mammal('Jerry', 'mouse');

/**
 * 判断实例是否共享属性/方法
 */
console.log('两个对象实例的type属性是否相等>>>>>>>>>>>>>>>>>>>>', tom.type === jerry.type);
console.log('两个对象实例的getName方法是否相等>>>>>>>>>>>>>>>>>>>>', tom.getName === jerry.getName);


