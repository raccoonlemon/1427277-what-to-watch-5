import {combineReducers} from "redux";
import {catalogReducer} from "./catalog/catalog";
import {filmsReducer} from "./films/films";
import {NameSpace} from "./namespace";
import {reviewsReducer} from "./reviews/reviews";
import {userReducer} from "./user/user";

export default combineReducers({
  [NameSpace.FILMS]: filmsReducer,
  [NameSpace.CATALOG]: catalogReducer,
  [NameSpace.USER]: userReducer,
  [NameSpace.REVIEWS]: reviewsReducer,
});
