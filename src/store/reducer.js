import {combineReducers} from "redux";
import {data} from "./data/data";
import {user} from "./user/user";
import {catalog} from "./catalog/catalog";
import {review} from "./review/review";

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
