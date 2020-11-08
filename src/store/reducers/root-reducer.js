import {combineReducers} from "redux";
import {filmCatalog} from "./film-catalog/film-catalog";
import {filmData} from "./film-data/film-data";

export const NameSpace = {
  DATA: `DATA`,
  CATALOG: `CATALOG`,
};

export default combineReducers({
  [NameSpace.DATA]: filmData,
  [NameSpace.CATALOG]: filmCatalog,
});
