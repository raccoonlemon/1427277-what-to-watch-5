export const ActionType = {
  CHANGE_CURRENT_GENRE: `CHANGE_CURRENT_GENRE`,
  INCREASE_SHOWN_FILMS_COUNT: `INCREASE_SHOWN_FILMS_COUNT`,
  RESET_SHOWN_FILMS_COUNT: `RESET_SHOWN_FILMS_COUNT`,
};

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

