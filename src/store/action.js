export const ActionType = {
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
};

export const ActionCreator = {
  changeGenreFilter: (filter)=>({
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: filter
  }),
  getFilmsByGenre: (films, genreFilter)=>({
    type: ActionType.GET_FILMS_BY_GENRE,
    payload: {films, genreFilter}
  })
};
