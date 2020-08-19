/**
 * 当前执行栈执行完毕后会先处理所有微任务队列事件，
 * 然后再从宏任务队列中取出最前面事件，加入执行栈。
 * 同一事件循环中，微任务永远在宏任务之前执行。
 */

setTimeout(function () {
    console.log('第四个输出：', 1);
});

new Promise(function (resolve) {
    console.log('第一个输出：', 2);
    resolve(3);
}).then(function (val) {
    console.log('第三个输出：', val);
});

console.log('第二个输出：', 0);
