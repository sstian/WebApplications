import moment from "moment";

/**
 * UTC时间字符串转本地时间字符串，offset取自数据库
 * @param   {String}  dateString 时间格式字符串（国际时间）
 * @param   {String}  offset     +08:00
 * @return  {String}  YYYY年MM月DD日 hh:mm:ss
 */

const DateFormat = "YY-MM-DD hh:mm:ss";

export function UTC2LocaleByOffset(dateString, offset = '+08:00') {
  if (typeof dateString !== "string") {
    throw new TypeError("date should be a string")
  }
  const date = moment.utc(dateString, DateFormat)
  return date.utcOffset(offset).format(DateFormat)
}

/**
 * 本地时间字符串转UTC时间字符串，offset取自数据库
 * @param   {String}  dateString 时间格式字符串（本地时间）
 * @param   {String}  offset     +08:00
 * @return  {String}  YYYY-MM-DD hh:mm:ss
 */
export function Locale2UTCByOffSet(dateString, offset = '+08:00') {
  if (typeof dateString !== "string") {
    throw new TypeError("date should be a string")
  }
  const date = moment.utc(dateString, DateFormat)
  date.utcOffset(offset)
  date.utcOffset(-date.utcOffset())
  return date.format(DateFormat)
}