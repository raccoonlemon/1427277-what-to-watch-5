import {combineReducers} from "redux";
import {filmCatalog} from "./film-catalog/film-catalog";
import {filmData} from "./film-data/film-data";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  CATALOG: `CATALOG`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: filmData,
  [NameSpace.CATALOG]: filmCatalog,
  [NameSpace.USER]: user,
});
