
/**
 * 冒泡排序
 * @param {Array} arr 
 */
function bubbleSort(arr) {
  let n = arr.length;
  // 外层循环控制 趟数 arr.lenght - 1
  for (let i = 0; i < n - 1; i++) {
    // 内层循环控制 一趟交换几次 arr.length - i -1
    for (let j = 0; j < n - i - 1; j++) {
      // 交换。升序排序
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
}

module.exports = {
  bubbleSort
}
