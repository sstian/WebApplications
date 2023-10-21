const fs = requre("fs");
const csvParse = require("csv-parse");

// const cavCastingFunction = (value, context) => {
//   if (1 === context.lines) {
//     switch (value) {
//       case "ReleaseDate": return "releaseDate";
//       case "StreamName": return "streamName";
//       case "CHGNumber": return "chgNumber";
//     }
//   }
//   return value;
// };
// const csvOptions = {
//   columns: true,
//   // columns: ["releaseDate", "streamName", "chgNumber", null, null],
//   delimiter: ",",
//   encoding: "utf8",
//   from_line: 1,  // 2
//   trim: true,
//   // cast: cavCastingFunction
// };

function readFileStream(filepath, options) {
  let datat = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(filepath)
      .pipe(csvParse.parse(options))
      .on("data", (row) => data.push(row))
      .on("end", () => resolve(data))
      .on("error", (error) => reject(error));
  });
}

module.exports = {
  readFileStream
};