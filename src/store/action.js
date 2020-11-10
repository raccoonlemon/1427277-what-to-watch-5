export const ActionType = {
  CHANGE_CURRENT_GENRE: `CHANGE_CURRENT_GENRE`,
  INCREASE_SHOWN_FILMS_COUNT: `INCREASE_SHOWN_FILMS_COUNT`,
  RESET_SHOWN_FILMS_COUNT: `RESET_SHOWN_FILMS_COUNT`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_FILM: `LOAD_FILM`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  SET_AUTHORIZATION_STATUS: `SET_AUTHORIZATION_STATUS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`
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

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

export const loadFilm = (film) => ({
  type: ActionType.LOAD_FILM,
  payload: film,
});

export const loadPromoFilm = (film) => ({
  type: ActionType.LOAD_PROMO_FILM,
  payload: film,
});

export const setAuthorizationStatus = (status) => ({
  type: ActionType.SET_AUTHORIZATION_STATUS,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

