
function padding(value, targetLength = 2, padString = "0") {
  // return (Array(targetLength).join(padString) + value).slice(-targetLength);
  return String(value).padStart(targetLength, padString);
}

module.exports = {
  padding
};