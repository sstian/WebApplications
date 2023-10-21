
const version = function (program) {
  program
    .command("version")
    .alias("ver")
    .description("output the version number")
    .action(() => console.log(program.version()));
};


module.exports = version;
