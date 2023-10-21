
// unit: millionsecond
const TIMESPAN_ONE_DAY = 1 * 24 * 3600 * 1000;

function padding(value, targetLength = 2, padString = "0") {
  // return (Array(targetLength).join(padString) + value).slice(-targetLength);
  return String(value).padStart(targetLength, padString);
}


/**
 * 
 * @param {Date} theDate 
 * @returns {string}
 * @example getDateString(new Date()), return "2023-08-27"
 */
function getDateString(theDate) {
  const year = padding(theDate.getFullYear());
  const month = padding(theDate.getMonth() + 1);
  const date = padding(theDate.getDate());

  return (`${year}-${month}-${date}`);
}

/**
 * 
 * @param {string} startTime 
 * @param {string} endTime 
 * @returns {number}
 * @example getDateBetween("2023-08-01", "2023-08-25"), return 4
 */
function getDayBetween(startTime, endTime) {
  const start = new Date(startTime);
  const end = new Date(endTime);
  if (start >= end) return 0;

  return ((end - start) / TIMESPAN_ONE_DAY);
}

/**
 * 
 * @param {string} startTime 
 * @param {string} endTime 
 * @returns {array}
 * @example getDateListBetween("2023-08-04", "2023-08-25"), return ["2023-08-24", "20230-08-25"]
 */
function getDateListBetween(startTime, endTime) {
  const start = new Date(startTime);
  const end = new Date(endTime);
  
  let dateStringList = [];
  let current = start;
  while (current <= end) {
    const dateString = getDateString(current);
    dateStringList.push(dateString);

    current = new Date(current.getTime() + TIMESPAN_ONE_DAY);
  }
  
  return dateStringList;
}


module.exports = {
  getDayBetween,
  getDateListBetween,
  getDateString
};