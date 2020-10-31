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
  increaseShownFilmsCount: (step)=>({
    type: ActionType.INCREASE_SHOWN_FILMS_COUNT,
    payload: step
  }),
  resetShownFilmsCount: ()=>({
    type: ActionType.RESET_SHOWN_FILMS_COUNT,
    payload: {}
  }),
};
