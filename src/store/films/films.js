import {createSelector} from "reselect";
import {MAX_SIMILAR_FILM_COUNT} from "../../const";
import {extend} from "../../utils/common";
import {getSimilarFilms} from "../../utils/films";
import {NameSpace} from "../namespace";

export const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_FILM: `LOAD_FILM`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`,
  UPDATE_IS_MOVIE_FAVOTIRE: `UPDATE_IS_MOVIE_FAVOTIRE`,
  UPDATE_FILMS_INFO: `UPDATE_FILMS_INFO`,
};

const initialState = {
  films: [],
  reviews: [],
  promoFilm: {},
  film: {},
  filteredFilms: [],
  favoriteFilms: []
};

// Reducer

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {films: action.payload});

    case ActionType.LOAD_FILM:
      return extend(state, {film: action.payload});

    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {promoFilm: action.payload});

    case ActionType.LOAD_FAVORITE_FILMS:
      return extend(state, {favoriteFilms: action.payload});

    case ActionType.UPDATE_FILMS_INFO:
      return extend(state, {
        film: action.payload,
        films: state.films.map((item)=>action.payload.id === item.id ? action.payload : item),
        promoFilm: state.promoFilm.id === action.payload.id ? action.payload : state.promoFilm,
        favoriteFilms: action.payload.isFavorite
          ? state.favoriteFilms.concat([action.payload])
          : state.favoriteFilms.filter((item)=> item.id !== action.payload.id)
      });
  }

  return state;
};

// Actions

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

export const loadFavoriteFilms = (films) => ({
  type: ActionType.LOAD_FAVORITE_FILMS,
  payload: films,
});

export const updateFilmsInfo = (film)=>({
  type: ActionType.UPDATE_FILMS_INFO,
  payload: film,
});


// Selectors

const nameSpace = NameSpace.FILMS;

export const selectFilms = (state) => state[nameSpace].films;
export const selectFavoriteFilms = (state) => state[nameSpace].favoriteFilms;
export const selectFilm = (state) => state[nameSpace].film;
export const selectPromoFilm = (state) => state[nameSpace].promoFilm;
export const selectIsFilmLoaded = (id) => (state) => selectFilm(state).id === id;

export const selectSimilarFilms = createSelector(
    [selectFilms, selectFilm],
    (films, film)=> getSimilarFilms(films, film).slice(0, MAX_SIMILAR_FILM_COUNT)
);

