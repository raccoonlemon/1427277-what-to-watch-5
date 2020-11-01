export const selectFilms = (state) => state.DATA.films;
export const selectPromoFilm = (state) => state.DATA.promoFilm;
export const selectFilteredFilms = (state) => state.DATA.filteredFilms;
export const selectReviews = (state) => state.DATA.reviews;

export const selectCurrentGenre = (state) => state.CATALOG.currentGenre;
export const selectShownFilmsCount = (state) => state.CATALOG.shownFilmsCount;
