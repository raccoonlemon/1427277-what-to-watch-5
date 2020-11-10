import {createSelector} from "reselect";
import {ALL_GENRES_FILTER, AuthorizationStatus} from "../const";
import {isFilmBelongsToGenre} from "../utils/films";

export const selectFilms = (state) => state.DATA.films;
export const selectPromoFilm = (state) => state.DATA.promoFilm;
export const selectReviews = (state) => state.DATA.reviews;

export const selectCurrentGenre = (state) => state.CATALOG.currentGenre;
export const selectShownFilmsCount = (state) => state.CATALOG.shownFilmsCount;

export const selectFilmByID = (id) => (state) => state.DATA.films.find((element)=>element.id.toString() === id);

export const selectIsUserLogged = (state) => state.USER.authorizationStatus === AuthorizationStatus.AUTH;

export const selectFilteredFilms = createSelector(
    [selectFilms, selectCurrentGenre],
    (films, genre)=> genre === ALL_GENRES_FILTER ? films : films.filter((film) => isFilmBelongsToGenre(film, genre))
);
