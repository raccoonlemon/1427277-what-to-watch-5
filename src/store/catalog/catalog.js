import {ALL_GENRES_FILTER, SHOWN_FILMS_INITIAL_COUNT} from "../../const";
import {extend} from "../../utils/common";

export const ActionType = {
  CHANGE_CURRENT_GENRE: `CHANGE_CURRENT_GENRE`,
  INCREASE_SHOWN_FILMS_COUNT: `INCREASE_SHOWN_FILMS_COUNT`,
  RESET_SHOWN_FILMS_COUNT: `RESET_SHOWN_FILMS_COUNT`,
};

const initialState = {
  currentGenre: ALL_GENRES_FILTER,
  shownFilmsCount: SHOWN_FILMS_INITIAL_COUNT,
};

// Reducer

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

// Actions

export const changeCurrentGenre = (genre)=>({
  type: ActionType.CHANGE_CURRENT_GENRE,
  payload: genre
});

export const increaseShownFilmsCount = (step)=>({
  type: ActionType.INCREASE_SHOWN_FILMS_COUNT,
  payload: step
});

export const resetShownFilmsCount = ()=>({
  type: ActionType.RESET_SHOWN_FILMS_COUNT,
  payload: {}
});
