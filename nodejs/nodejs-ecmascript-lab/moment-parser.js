
// ---
// datetime-util.js

function getDateInThisWeek(today, whatday) {
  // get the day of week. getDay() returns 0, 1-6
  let weekday = today.getDay() || 7;
  const timespan = 24 * 60 * 60 * 1000; // one day timespan
  return new Date(timespan * (whatday - weekday) + today.getTime());
}

function padding(value, targetlength = 2, padString = "0") {
  // return (Array(targetLength).join(padString) + value).slice(-targetLength)
  return String(value).padStart(targetlength, padString);
}

function getDateString(theDate, delimiter = "") {
  let year = theDate.getFullYear();
  let month = padding(theDate.getMonth() + 1);
  let date = padding(theDate.getDate());
  return (`${year}${delimiter}${month}${delimiter}${date}`);
}
// ---


// --- 
// moment-parser.js

const WeekdayLower = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7
}

/**
 * parse time
 * @param {Date} dateSpecification 
 * @param {string} timeDescription 
 * @example "saturday 09:00"
 * @returns {Date} datetime
 */
function parseTime(dateSpecification, timeDescription) {
  const slices = timeDescription.trim().toLowerCase().split(/\s+/);
  const weekdayString = slices[0];
  const timeString = slices[1];

  const whatday = WeekdayLower[weekdayString];
  if (!whatday) {
    throw new Error(`Weekday["${weekdayString}"] is undefined, maybe "${weekdayString}" spelling is wrong`);
  }

  const theDate = getDateInThisWeek(dateSpecification, whatday);
  const dateString = getDateString(theDate, "-");
  const timestamp = Date.parse(`${dateString} ${timeString} UTC+08:00`);
  return new Date(timestamp);
}

/**
 * parse duration
 * @param {string} durationDescription 
 * @example "2d 23h 59m"
 * @returns {number} duration, unit: milliseconds
 */
function parseDuration(durationDescription) {
  let duration = 0;

  const slices = durationDescription.trim().split(/\s+/);
  for (let slice of slices) {
    const num = parseInt(slice.match(/\d+/)[0]);
    const quantifier = slice.match(/[a-zA-Z]+/)[0];
    duration += getTimespan(num, quantifier);
  }

  return duration;
}

/**
 * get timespan of `num quantifier`
 * @param {number} num 
 * @param {string} quantifier 
 * "d": days
 * "h": hours
 * "m": minutes
 * "s": seconds
 * @returns {number} timespan, unit: milliseconds
 */
function getTimespan(num, quantifier) {
  switch (quantifier) {
    case "d": return (num * 24 * 60 * 60 * 1000);
    case "h": return (num * 60 * 60 * 1000);
    case "m": return (num * 60 * 1000);
    case "s": return (num * 1000);
  }
  return 0;
}

// ---

const stream = {
  name: "LIVE",
  releaseTime: "saturday 09:00",
  releaseDuration: "2d 23h 59m",
  templateId: "CTMP1234567890",
  teamDL: "",
};

const datetime = parseTime(new Date(), stream.releaseTime);
// "2024-01-04 12:00:00 UTC+08:00"
const duration = parseDuration(stream.releaseDuration);

console.log("startDate", datetime.toISOString());
console.log("duration", duration);
console.log("endDate", new Date(datetime.getTime() + duration).toISOString())


