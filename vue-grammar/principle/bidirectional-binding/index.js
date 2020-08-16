import Watcher from "./watcher";
import observer from "./observer";

// function MyCustomVue(data, el, exp) {
//     this.data = data;
//     observer(data);
//     el.innerHTML = this.data[exp];
//     new Watcher(this, exp, function (value) {
//         el.innerHTML = value;
//     })
// }


function MyCustomVue(data, el, exp) {
    var self = this;
    this.data = data;

    Object.keys(data).forEach(function (key) {
        self.proxyKeys(key);
    });

    observer(data);

    el.innerHTML = this.data[exp];
    new Watcher(this, exp, function (value) {
        el.innerHTML = value;
    });

    return this;
}

MyCustomVue.prototype = {
    proxyKeys: function (key) {
        var self = this;
        Object.defineProperty(this, key, {
            enumerable: false,
            configurable: true,
            get: function proxyGetter() {
                return target.data[key]
            },
            set: function proxySetter(newVal) {
                self.data[key] = newVal;
            }
        })
    }
};

export default MyCustomVue;


