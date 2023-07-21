
/**
 * 为指定元素绑定响应函数
 * @param {object} obj 要绑定事件的对象
 * @param {string} eventStr 事件的字符串，不要"on"
 * @param {function} callback 回调函数
 */
function useEventBind(obj, eventStr, callback) {
  if (obj.addEventListener) {
    // 大部分浏览器支持的方式
    // 是否在捕获阶段触发事件 - false
    obj.addEventListener(eventStr, callback, false);
  } else {
    // 为了支持IE8及其以下
    obj.attachEvent("on" + eventStr, function () {
      // 更改attachEvent中的this，从window到调用的obj
      callback.call(obj);
    });
  }
}