import {ALL_GENRES_FILTER, SHOWN_FILMS_INITIAL_COUNT} from "../../const";
import {extend} from "../../utils/common";
import {ActionType} from "../actions/users";

const initialState = {
  currentGenre: ALL_GENRES_FILTER,
  shownFilmsCount: SHOWN_FILMS_INITIAL_COUNT,

};

export const catalog = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_CURRENT_GENRE:
      return extend(state, {currentGenre: action.payload});

    case ActionType.INCREASE_SHOWN_FILMS_COUNT:
      return extend(state, {shownFilmsCount: state.shownFilmsCount + action.payload});

    case ActionType.RESET_SHOWN_FILMS_COUNT:
      return extend(state, {shownFilmsCount: SHOWN_FILMS_INITIAL_COUNT});
  }

  return state;
};
