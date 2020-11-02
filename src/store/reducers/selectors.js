import {createSelector} from "reselect";
import {isFilmBelongsToGenre} from "../../utils/films";

export const selectFilms = (state) => state.DATA.films;
export const selectPromoFilm = (state) => state.DATA.promoFilm;
export const selectReviews = (state) => state.DATA.reviews;

export const selectCurrentGenre = (state) => state.CATALOG.currentGenre;
export const selectShownFilmsCount = (state) => state.CATALOG.shownFilmsCount;

export const selectFilteredFilms = createSelector(
    [selectFilms, selectCurrentGenre],
    (films, genre)=>films.filter((film) => isFilmBelongsToGenre(film, genre))
);
