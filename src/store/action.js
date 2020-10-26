export const ActionType = {
  CHANGE_CURRENT_GENRE: `CHANGE_CURRENT_GENRE`,
  SET_FILTERED_FILMS_BY_GENRE: `SET_FILTERED_FILMS_BY_GENRE`,
};

export const ActionCreator = {
  changeCurrentGenre: (genre)=>({
    type: ActionType.CHANGE_CURRENT_GENRE,
    payload: genre
  }),
  setFilteredFilms: ()=>({
    type: ActionType.SET_FILTERED_FILMS_BY_GENRE,
    payload: {}
  })
};
