
import {ActionType, filmsReducer, loadFavoriteFilms, loadFilm, loadFilms, loadPromoFilm, updateFilmsInfo} from "../films/films";
import {films, film} from "../../mocks/films";

describe(`User action creators returns correct actions`, () => {

  it(`load films`, () => {
    expect(loadFilms(films)).toEqual({
      type: ActionType.LOAD_FILMS,
      payload: films,
    });
  });

  it(`load film`, () => {
    expect(loadFilm(film)).toEqual({
      type: ActionType.LOAD_FILM,
      payload: film,
    });
  });

  it(`load promo film`, () => {
    expect(loadPromoFilm(film)).toEqual({
      type: ActionType.LOAD_PROMO_FILM,
      payload: film,
    });
  });

  it(`load favorite films`, () => {
    expect(loadFavoriteFilms(films)).toEqual({
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: films,
    });
  });

  it(`update films info`, () => {
    expect(updateFilmsInfo(film)).toEqual({
      type: ActionType.UPDATE_FILMS_INFO,
      payload: film,
    });
  });

});

describe(`Films reducer works correctly`, () => {

  it(`without additional parameters should return initial state`, () => {
    expect(filmsReducer(void 0, {})).toEqual({
      films: [],
      promoFilm: {},
      film: {},
      filteredFilms: [],
      favoriteFilms: []
    });
  });

  it(`should load films"`, () => {
    expect(filmsReducer({
      films: [],
    }, {
      type: ActionType.LOAD_FILMS,
      payload: films
    })).toEqual({
      films
    });
  });

  it(`should load favorite films"`, () => {
    expect(filmsReducer({
      favoriteFilms: [],
    }, {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: films
    })).toEqual({
      favoriteFilms: films
    });
  });

  it(`should load film"`, () => {
    expect(filmsReducer({
      film: {},
    }, {
      type: ActionType.LOAD_FILM,
      payload: film
    })).toEqual({
      film
    });
  });

  it(`should load promo film"`, () => {
    expect(filmsReducer({
      promoFilm: {},
    }, {
      type: ActionType.LOAD_PROMO_FILM,
      payload: film
    })).toEqual({
      promoFilm: film
    });
  });

  it(`should update films info"`, () => {
    expect(filmsReducer({
      films,
      promoFilm: films[1],
      film,
      favoriteFilms: []
    }, {
      type: ActionType.UPDATE_FILMS_INFO,
      payload: film
    })).toEqual({
      films,
      promoFilm: films[1],
      film,
      favoriteFilms: [film]
    });
  });

});
