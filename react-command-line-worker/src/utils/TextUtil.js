export function pareCommandLine(sourceText) {
  console.log("pareCommandLine()");

  const argumentPairs = sourceText.trim().replaceAll("\n", " ").split(" -");
  console.log("argumentPairs", argumentPairs);

  const assembly = argumentPairs.shift();
  console.log("assembly = ", assembly);

  let rowIndex = 1;
  const newRowData = argumentPairs.map(pair => {
    let args = pair.split(" ");
    console.log("args = ", args);

    return (args.length > 2 ?
      { id: rowIndex++, argument: args.shift(), value: args.join(" ") } :
      { id: rowIndex++, argument: args[0], value: args[1] || "" }
    );
  });
  console.log("newRowData = ", newRowData);

  return newRowData;
}