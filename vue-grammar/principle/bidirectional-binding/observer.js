function defineReactive(data, key, val) {
    observer(val);
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            return val;
        },
        set: function (newVal) {
            val = newVal;
            console.log(`属性${key}已被监听，当前值为${newVal.toString()}`)
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

var longLongWayBookStore= {
    address: '天堂路1号',
    openingHours: {
        morning: '6:00',
        afternoon: '18:00'
    }
};

observer(longLongWayBookStore);
longLongWayBookStore.address = '茉莉花路3号';
longLongWayBookStore.openingHours.afternoon = '17:00';
