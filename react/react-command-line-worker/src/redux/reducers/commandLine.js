import { NEW_COMMANDLINE } from "../constant";

const initState = "";
export default function commandLineReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case NEW_COMMANDLINE:
      console.log(`commandLineReducer() - NEW_COMMANDLINE\n`, data);
      return data;
    default:
      return preState;
  }
}