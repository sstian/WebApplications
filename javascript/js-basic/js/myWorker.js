
/**
 * 计算斐波那次序列 Fibonacci sequence
 * F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2)
 * e.g. 1 1 2 3 5 8 ...
 * @param {number} n 
 * @returns {number}
 */
function fibonacci(n) {
  if (n <= 0) return 0;
  return (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
}

var onmessage = function (event) {
  var number = event.data;
  console.log(`worker thread - onmessage(): receive number=`, number);

  var result = fibonacci(number);
  postMessage(result);
  console.log(`worker thread - onmessage(): send result=`, result);
}

console.log(this);
