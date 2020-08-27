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
function f() {
}

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


/**
 * ********************对象的prototype对象 ********************
 * 任何一个对象，都可以充当其他对象的原型，原型对象也是对象，所以它也有自己的原型，由此形成原型链
 * 原型链最终上溯到Object.prototype
 * Object.prototype的原型是null
 */

console.log('Object.prototype的原型是>>>>>>>>>>>>>>>>>>>>', Object.getPrototypeOf(Object.prototype));

/**
 * ********************prototype对象的constructor属性 ********************
 */

/**
 * 定义一个对象构造函数
 * @constructor
 */
function Person() {
}

console.log('P的原型有一个constructor属性>>>>>>>>>>>>>>>>>>>>', Person.prototype.constructor === P);


/**
 * 判断constructor是否被继承
 */
function Human() {
}

var p = new Human();

console.log('Human对象的constructor属性其实是它原型对象Object的构造函数>>>>>>>>>>>>>>>>>>>>', Human.constructor === Object.constructor);
console.log('p的constructor属性指向原型对象Human的构造函数>>>>>>>>>>>>>>>>>>>>', p.constructor === Human);
console.log('p的constructor属性即Human对象的constructor属性>>>>>>>>>>>>>>>>>>>>', p.constructor === Human.prototype.constructor);
console.log('p的constructor属性是继承而来，不属于自身属性>>>>>>>>>>>>>>>>>>>>', p.hasOwnProperty('constructor'));

