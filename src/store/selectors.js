import {createSelector} from "reselect";
import {ALL_GENRES_FILTER, AuthorizationStatus} from "../const";
import {isFilmBelongsToGenre, getGenresList} from "../utils/films";
import {NameSpace} from "./reducer";

export const selectFilms = (state) => state[NameSpace.DATA].films;
export const selectPromoFilm = (state) => state[NameSpace.DATA].promoFilm;
export const selectReviews = (state) => state[NameSpace.DATA].reviews;

export const selectCurrentGenre = (state) => state[NameSpace.CATALOG].currentGenre;
export const selectShownFilmsCount = (state) => state[NameSpace.CATALOG].shownFilmsCount;

export const selectFilmByID = (id) => (state) => state[NameSpace.DATA].films.find((element)=>element.id.toString() === id);

export const selectIsUserLogged = (state) => state[NameSpace.USER].authorizationStatus === AuthorizationStatus.AUTH;

export const selectFilteredFilms = createSelector(
    [selectFilms, selectCurrentGenre],
    (films, genre)=> genre === ALL_GENRES_FILTER ? films : films.filter((film) => isFilmBelongsToGenre(film, genre))
);

export const selectIsAllFilmsShown = (state) => selectShownFilmsCount(state) >= selectFilteredFilms(state).length;
export const selectGenreList = (state) => getGenresList(state[NameSpace.DATA].films);
