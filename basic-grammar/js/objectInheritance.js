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
function P() {
}

console.log('P的原型有一个constructor属性>>>>>>>>>>>>>>>>>>>>', P.prototype.constructor === P);


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


/**
 * ********************对象的constructor方法 ********************
 */
function Person(name) {
    this.name = name;
}

/**
 * constructor属性定义在prototype对象上
 */
Person.constructor === Person.prototype.constructor; //false
Person.prototype.constructor === Person; //true

/**
 * 实例对象继承原型链上的Person.prototype.constructor
 * @type {Person}
 */
function Animal() {
}

var cat = new Animal();
cat.constructor === Animal; //true
cat.constructor === Animal.prototype.constructor; //true
cat.hasOwnProperty('constructor'); //false

/**
 * 可以从一个实例对象新建另一个实例
 * @type {Person}
 */
var tiger = new cat.constructor();
tiger instanceof Animal;

/**
 * 可以从name属性得到构造函数名称
 */
tiger.constructor.name;

/**
 * 修改构造函数的原型对象
 * @type {{method: Person.method}}
 */
Person.prototype = {
    method: function () {
    }
};

/**
 * 上面修改原型对象时，没有同步修改constructor属性，因此原函数的constructor不再指向Person
 */
Person.prototype.constructor === Person; //false
Person.prototype.constructor === Object; //true


/**
 * ********************instanceof********************
 * instanceof检查整个原型链，同一个实例对象可能会对多个构造函数都返回true
 * 任意对象，除null，都是Object的实例
 * instanceof检测右边构造函数的prototype属性是否在左边对象原型链上
 */

function Girl() {
}

var anna = new Girl();

/**
 * 同一个实例对象可能会对多个构造函数都返回true
 */
anna instanceof Girl; //true
anna instanceof Object; //true

/**
 * 对null和undefined，instanceof总是返回false
 */
undefined instanceof Object; // false
null instanceof Object; // false

/**
 * 对象原型链上只有null，instanceof判断失真
 * @type {null}
 */
var obj = Object.create(null);
typeof obj;
Object.create(null) instanceof Object; // false

/**
 * instanceof可以用来判断对象值的类型
 */
var x = [];
var y = {};
x instanceof Array; // true
y instanceof Object; // true


/**
 * ********************构造函数的继承********************
 */
function Super() {
    this.id = 0;
}

Super.prototype.getId = function () {
    console.log('当期实例id：', this.id);
};

Super.prototype.setId = function (id) {
    this.id = id;
};

function Sub(signature) {
    Super.call(this);
    this.signature = signature;
}

Sub.prototype = Object.create(Super.prototype);
Sub.prototype.constructor = Sub;

var ins = new Sub('宅');
ins instanceof Sub;
ins instanceof Super;

/**
 * ********************原型链继承********************
 */
function SuperType() {
    this.colors = ['red', 'yellow', 'blue'];
}

SuperType.prototype.getSuperValue = function () {
    return this.colors;
};

function SubType() {
    this.subProperty = false;
}

SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function () {
    return this.subProperty;
};

var instance1 = new SubType();
console.log('instance1.colors>>>>>>>>>>>>>>>>>>>>', instance1.getSuperValue());

instance1.colors.push('black');
console.log('instance1.colors更新>>>>>>>>>>>>>>>>>>>>', instance1.colors);

var instance2 = new SubType();
console.log('instance2.colors>>>>>>>>>>>>>>>>>>>>', instance2.getSuperValue());

/**
 * ********************利用构造函数继承********************
 */

function OtherSubType() {
    SuperType.call(this);
}

var instance3 = new OtherSubType();
instance3.colors.push('white');
console.log('instance3.colors>>>>>>>>>>>>>>>>>>>>', instance3.colors);

var instance4 = new OtherSubType();
console.log('instance4.colors>>>>>>>>>>>>>>>>>>>>', instance4.colors);

/**
 * ********************组合继承********************
 */
function MixSubType() {
    SuperType.call(this);
}

MixSubType.prototype = new SuperType();
MixSubType.prototype.constructor = MixSubType;


var instance5 = new MixSubType();
instance5.colors.push('pink');
console.log('instance5.colors>>>>>>>>>>>>>>>>>>>>', instance5.colors);
console.log('instance5.getSuperValue()>>>>>>>>>>>>>>>>>>>>', instance5.getSuperValue());

var instance6 = new MixSubType();
console.log('instance6.colors>>>>>>>>>>>>>>>>>>>>', instance6.colors);


/**
 * ********************多重继承********************
 * 不允许一个对象同时继承多个对象
 * 如下方式可以实现多重继承的效果
 */
function Super1() {
    this.property1 = 'Hi';
}

function Super2() {
    this.property2 = 'Hello';
}

function CuteSub() {
    Super1.call(this);
    Super2.call(this);
}

CuteSub.prototype = Object.create(Super1.prototype);
Object.assign(CuteSub.prototype, Super2.prototype);

CuteSub.prototype.constructor = CuteSub;

var cuteInstance = new CuteSub();
cuteInstance.property1;
cuteInstance.property2;

/**
 * 模块 放大模式
 * @type {{}}
 */
var module1 = (function (mod) {
    mod.m3 = function () {
    };
    return mod;
})(window.module1 || {});
