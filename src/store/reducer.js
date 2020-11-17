import {combineReducers} from "redux";
import {data} from "./reducers/data";
import {user} from "./reducers/user";
import {catalog} from "./reducers/catalog";
import {review} from "./reducers/review";

export const NameSpace = {
  DATA: `DATA`,
  CATALOG: `CATALOG`,
  USER: `USER`,
  REVIEW: `REVIEW`,
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.CATALOG]: catalog,
  [NameSpace.USER]: user,
  [NameSpace.REVIEW]: review,
});
