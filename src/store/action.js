import {SHOWN_FILMS_INITIAL_COUNT, SHOW_MORE_FILMS_STEP} from "../const";

export const ActionType = {
  CHANGE_CURRENT_GENRE: `CHANGE_CURRENT_GENRE`,
  SET_FILTERED_FILMS_BY_GENRE: `SET_FILTERED_FILMS_BY_GENRE`,
  INCREASE_SHOWN_FILMS_COUNT: `INCREASE_SHOWN_FILMS_COUNT`,
  RESET_SHOWN_FILMS_COUNT: `RESET_SHOWN_FILMS_COUNT`,
};

export const ActionCreator = {
  changeCurrentGenre: (genre)=>({
    type: ActionType.CHANGE_CURRENT_GENRE,
    payload: genre
  }),
  setFilteredFilms: ()=>({
    type: ActionType.SET_FILTERED_FILMS_BY_GENRE,
    payload: {}
  }),
  increaseShownFilmsCount: ()=>({
    type: ActionType.INCREASE_SHOWN_FILMS_COUNT,
    payload: SHOW_MORE_FILMS_STEP
  }),
  resetShownFilmsCount: ()=>({
    type: ActionType.RESET_SHOWN_FILMS_COUNT,
    payload: SHOWN_FILMS_INITIAL_COUNT
  }),
};
