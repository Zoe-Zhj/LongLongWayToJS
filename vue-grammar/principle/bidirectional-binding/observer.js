import Dep from "./dep";

function defineReactive(data, key, val) {
    //递归遍历嵌套的子属性
    observer(val);

    //创建一个消息订阅器
    var dep = new Dep();

    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            if (Dep.target) {
                //将订阅者添加在getter里，触发其初始化
                dep.addSub(Dep.target);
            }
            return val;
        },
        set: function (newVal) {
            val = newVal;
            console.log(`属性${key}已被监听，当前值为${newVal.toString()}`);

            //属性变化，通知订阅者
            dep.notify();
        }
    })
}

function observer(data) {
    if (!data || typeof data !== 'object') {
        return;
    }
    Object.keys(data).forEach(key => {
        defineReactive(data, key, data[key]);
    })
}

var longLongWayBookStore = {
    address: '天堂路1号',
    openingHours: {
        morning: '6:00',
        afternoon: '18:00'
    }
};

observer(longLongWayBookStore);
longLongWayBookStore.address = '茉莉花路3号';
longLongWayBookStore.openingHours.afternoon = '17:00';


export default observer;
