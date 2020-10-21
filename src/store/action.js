export const ActionType = {
  CHANGE_CURRENT_GENRE: `CHANGE_CURRENT_GENRE`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
};

export const ActionCreator = {
  changeCurrentGenre: (filter)=>({
    type: ActionType.CHANGE_CURRENT_GENRE,
    payload: filter
  }),
  getFilmsByGenre: (films, currentGenre)=>({
    type: ActionType.GET_FILMS_BY_GENRE,
    payload: {films, currentGenre}
  })
};
