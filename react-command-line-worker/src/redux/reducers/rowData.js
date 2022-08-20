import { NEW_ROWDATA } from "../constant";

// const initState = [
//   { id: 1, argument: "dbUser", value: "eqjobs" },
//   { id: 2, argument: "dbServer", value: "eqtgdbdev01_ds_157" },
//   { id: 3, argument: "outputPath", value: "D:\\eqtg\\log" }
// ];
const initState2 = [];
export default function rowDataReducer(preState = initState2, action) {
  const { type, data } = action;
  switch (type) {
    case NEW_ROWDATA:
      console.log(`rowDataReducer() - NEW_ROWDATA\n`, data);
      return data;
    default:
      return preState;
  }
}