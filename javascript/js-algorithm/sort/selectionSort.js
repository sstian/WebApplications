
/**
 * 选择排序
 * @param {Array} arr 
 */
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    // 每一趟循环比较时，记录较小元素的下标
    let min = i;
    for (let j = i + 1; j < n; j++) {
      // 升序排序
      if (arr[j] < arr[i]) {
        min = j;
      }
    }
    // 交换
    if (min !== i) {
      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
  }
}

module.exports = {
  selectionSort
}
