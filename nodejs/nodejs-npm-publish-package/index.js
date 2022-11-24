
/**
 * 生成指定范围的随机数
 * @param {*} m start number
 * @param {*} n end number
 * @returns 
 * @example console.log(random(10, 20));
 */
function random(m, n) {
  return (Math.ceil(Math.random() * (n - m + 1)) + m - 1);
}

module.exports = random;