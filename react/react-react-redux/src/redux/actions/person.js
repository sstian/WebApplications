import { ADD_PERSON } from "../constant";

// 同步action
export const addPerson = personObj => ({ type: ADD_PERSON, data: personObj })
