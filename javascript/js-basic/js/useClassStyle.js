
function hasClassStyle(obj, className) {
  var reg = new RegExp("\\b" + className + "\\b");
  return reg.test(obj.className);
}

function addClassStyle(obj, className) {
  obj.className += " " + className;
}

function removeClassStyle(obj, className) {
  var reg = new RegExp("\\b" + className + "\\b");
  obj.className = obj.className.replace(reg, "").trim();
}

/**
 * 用来切换一个样式类。
 * 如果元素中具有该类，则删除
 * 如果元素中没有该类，则添加
 * @param {object} obj 
 * @param {string} className 
 */
function toggleClassStyle(obj, className) {
  hasClassStyle(obj, className) ? removeClassStyle(obj, className) : addClassStyle(obj, className);
}
