
/**
 * 用来获取指定元素的当前样式
 * @param {object} obj 要获取样式的元素
 * @param {string} name 要获取的样式名
 * @returns 
 */
function getStyle(obj, name) {
  if (window.getComputedStyle) {
    // 一般浏览器的方式
    return window.getComputedStyle(obj, null)[name];
  } else {
    // IE8的方式，因为没有 getComputedStyle()
    return obj.currentStyle[name];
  }
}

/**
 * 使用定时触发器执行简单动画
 * @param {object} obj 执行动画的对象
 * @param {string} attr 执行动画的样式，如：left, top, width, height
 * @param {number} target 执行动画的目标位置
 * @param {number} speed 移动的速度
 * @param {function} callback 动画执行完成以后执行的回调函数
 */
function useTimerMove(obj, attr, target, speed, callback) {
  // 关闭上一个定时器
  window.clearInterval(obj.timer);

  // 获取元素目前的状态
  var current = window.parseInt(getStyle(obj, attr));

  // 判断速度的正负
  // 如果 0 -> 800，则 speed 为正
  // 如果 800 -> 0，则 speed 为负
  current > target ? speed = -speed : undefined;

  // 开启定时器，执行动画效果
  obj.timer = window.setInterval(function () {
    var oldValue = window.parseInt(getStyle(obj, attr));
    var newValue = oldValue + speed;

    // 如果向左移动，判断 newValue < target
    // 如果向右移动，判断 newValue > target
    if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
      newValue = target;
    }

    // 设置新值
    obj.style[attr] = newValue + "px";

    // 当元素达到目标位置，停止动画
    if (newValue == target) {
      // 关闭定时器
      clearInterval(obj.timer);
      // 动画执行完毕，调用回调函数
      callback && callback();
    }
  }, 30);

}