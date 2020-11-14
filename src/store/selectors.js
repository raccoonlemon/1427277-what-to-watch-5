import {createSelector} from "reselect";
import {ALL_GENRES_FILTER, AuthorizationStatus, MAX_SIMILAR_FILM_COUNT} from "../const";
import {isFilmBelongsToGenre, getGenresList, getSimilarFilms} from "../utils/films";
import {NameSpace} from "./reducer";

export const selectFilms = (state) => state[NameSpace.DATA].films;
export const selectFavoriteFilms = (state) => state[NameSpace.DATA].favoriteFilms;
export const selectFilm = (state) => state[NameSpace.DATA].film;
export const selectPromoFilm = (state) => state[NameSpace.DATA].promoFilm;
export const selectReviews = (state) => state[NameSpace.DATA].reviews;
export const selectIsFilmLoaded = (id) => (state) => selectFilm(state).id === id;

export const selectCurrentGenre = (state) => state[NameSpace.CATALOG].currentGenre;
export const selectShownFilmsCount = (state) => state[NameSpace.CATALOG].shownFilmsCount;

export const selectAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

export const selectIsUserLogged = (state) => {
  return selectAuthorizationStatus(state) === AuthorizationStatus.AUTH;
};

export const selectFilteredFilms = createSelector(
    [selectFilms, selectCurrentGenre],
    (films, genre)=> genre === ALL_GENRES_FILTER ? films : films.filter((film) => isFilmBelongsToGenre(film, genre))
);

export const selectSimilarFilms = createSelector(
    [selectFilms, selectFilm],
    (films, film)=> getSimilarFilms(films, film).slice(0, MAX_SIMILAR_FILM_COUNT)
);

export const selectIsAllFilmsShown = (state) => selectShownFilmsCount(state) >= selectFilteredFilms(state).length;
export const selectGenreList = (state) => getGenresList(selectFilms(state));
