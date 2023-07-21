

/**
 * 键盘方向键按下，控制元素移动
 * @param {object} obj 要移动的元素
 * @param {number} speed 1. 移动速度
 */
function useKeyMove(obj, speed = 10) {
  // 2. 移动方向
  var dir = 0;

  // 开启定时器，控制元素移动
  window.setInterval(function () {
    switch (dir) {
      // left
      case 37: obj.style.left = obj.offsetLeft - speed + "px"; break;
      // up
      case 38: obj.style.top = obj.offsetTop - speed + "px"; break;
      // right
      case 39: obj.style.left = obj.offsetLeft + speed + "px"; break;
      // down
      case 40: obj.style.top = obj.offsetTop + speed + "px"; break;
      default: break;
    }
  }, 30);

  // 按键按下，元素移动
  document.onkeydown = function (event) {
    event = event || window.event;

    // 同时按下Ctrl键，加速
    event.ctrlKey ? speed = 100 : speed = 10;

    dir = event.keyCode;
  };

  // 按键松开，元素不再移动
  document.onkeyup = function () {
    dir = 0;
  };
}