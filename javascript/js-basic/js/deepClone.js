// 递归实现深拷贝
/**
 * @param {} data 
 * @return "Array" | "Object" | ""
 */
function getDataType(data) {
  // [object Array], [object Object]
  // return Object.prototype.toString.call(data).slice(8, -1);
  if (data instanceof Array) return "Array";
  if (data instanceof Object) return "Object";
  return "";

}
function deepClone(data) {
  // 创建一个容器
  let container;
  // 判断数据类型
  switch (getDataType(data)) {
    case "Array": container = []; break;
    case "Object": container = {}; break;
    default: return data;
  }
  // 遍历数据
  for (let index in data) {
    let currentData = data[index];
    // 获取键的类型
    let type = getDataType(currentData);
    if (type === "Array" || type === "Object") {
      // 引用类型，递归调用
      container[index] = deepClone(currentData);
    } else {
      // 非引用类型，直接复制
      container[index] = currentData;
    }
  }
  return container;
}