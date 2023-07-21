
/**
 * 用于设置拖拽
 * @param {object} obj 开启拖拽的元素
 */
function useDragDrop(obj) {
  obj.onmousedown = function (event) {
    // 设置元素捕获所有鼠标按下事件
    // 取消默认行为，适配IE
    // 仅IE支持，FireFox中调用不会报错，Chrome中调用会报错
    obj.setCapture && obj.setCapture();

    // 适配IE，IE的event在window上
    event = event || window.event;

    // 定位鼠标相对于元素位置
    // div的偏移量：鼠标.clientX - 元素.offsetLeft
    // div的偏移量：鼠标.clientY - 元素.offsetTop
    var offsetLeft = event.clientX - obj.offsetLeft;
    var offsetTop = event.clientY - obj.offsetTop;

    document.onmousemove = function (event) {
      event = event || window.event;

      // 获取鼠标坐标
      var left = event.clientX - offsetLeft;
      var top = event.clientY - offsetTop;
      // 修改位置
      obj.style.left = left + "px";
      obj.style.top = top + "px";
    };

    document.onmouseup = function () {
      // 取消事件绑定
      document.onmousemove = null;
      document.onmouseup = null;

      // 取消事件捕获
      obj.releaseCapture && box1.releaseCapture();
    };

    // 取消默认行为（拖拽网页中的内容，浏览器默认使用搜索引擎去搜索）
    // IE8不支持
    return false;
  };
}