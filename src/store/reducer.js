import {ALL_GENRES_FILTER} from "../const";
import {extend} from "../utils/common";
import {getFilmsByGenre} from "../utils/films";
import {ActionType} from "./action";

const initialState = {
  genreFilter: ALL_GENRES_FILTER,
  films: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_GENRE_FILTER:
      return extend(state, {genreFilter: action.payload});

    case ActionType.GET_FILMS_BY_GENRE:
      return extend(state, {films: getFilmsByGenre(action.payload)});
  }

  return state;
};
