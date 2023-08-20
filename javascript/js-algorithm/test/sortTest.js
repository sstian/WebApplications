
const {bubbleSort} = require ("../sort/bubbleSort");
const {selectionSort} = require ("../sort/selectionSort");

let arr = [2, 6, 4, 3, 5, 1];
console.log("before sorting: ", arr);
// bubbleSort(arr);
selectionSort(arr);
console.log("after sorting: ", arr);
