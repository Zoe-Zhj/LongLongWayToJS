/**
 * 能力检测（这个代码比较古老，可能不适用了）
 * @param id
 * @returns {Element}
 */
function getElement(id) {
    if (document.getElementById) {
        console.log('使用getElementById方法');
        return document.getElementById(id);
    } else if (document.all) {
        console.log('使用document.all');
        return document.all[id];
    } else {
        throw new Error('无法获取元素')
    }
}

/**
 * 在浏览器对象下测试对象的属性是否存在
 * @param object
 * @param property
 * @returns {boolean}
 */
function isHostMethod(object, property) {
    var t = typeof object[property];
    return t === 'function' ||
        (!!(t === 'object' && object[property])) ||
        t === 'unknown'
}
