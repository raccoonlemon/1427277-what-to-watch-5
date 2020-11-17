import {combineReducers} from "redux";
import {data} from "./reducers/data";
import {user} from "./reducers/user";
import {catalog} from "./reducers/catalog";
import {film} from "./reducers/film";

export const NameSpace = {
  DATA: `DATA`,
  CATALOG: `CATALOG`,
  USER: `USER`,
  FILM: `FILM`,
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.CATALOG]: catalog,
  [NameSpace.USER]: user,
  [NameSpace.FILM]: film,
});
