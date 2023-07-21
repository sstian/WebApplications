
/**
 * 元素随着鼠标滚动而改变高度。
 * 向上滚，变长
 * 向下滚，变短
 * @param {object} obj 要变化的元素
 * @param {number} length 滚动一次变化的长度
 */
function useWheelFlex(obj, length) {
  obj.onmousewheel = function (event) {
    event = event || window.event;

    // 判断鼠标滚轮方向
    // event.wheelDelta 获取鼠标浮动方向，向上滚 120，向下滚 -120
    // FireFox 不支持，需要使用 event.detail 获取鼠标滚动方向，向上滚 -3，向下滚 3
    if (event.wheelDelta > 0 || event.detail < 0) {
      // 向上滚，变短
      obj.style.height = obj.clientHeight - length + "px";
    } else {
      // 向下滚，变长
      obj.style.height = obj.clientHeight + length + "px";
    }

    // 取消默认行为，对于使用addEventListener()方法绑定响应函数
    // IE8不支持
    event.preventDefault && event.preventDefault();
    // 取消默认行为（浏览器的滚动条）
    return false;
  };
}