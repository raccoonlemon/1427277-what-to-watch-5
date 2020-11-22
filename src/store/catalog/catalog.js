import {createSelector} from "reselect";
import {ALL_GENRES_FILTER, SHOWN_FILMS_INITIAL_COUNT} from "../../const";
import {extend} from "../../utils/common";
import {getGenresList, isFilmBelongsToGenre} from "../../utils/films";
import {selectFilms} from "../films/films";
import {NameSpace} from "../namespace";

export const ActionType = {
  CHANGE_CURRENT_GENRE: `CHANGE_CURRENT_GENRE`,
  INCREASE_SHOWN_FILMS_COUNT: `INCREASE_SHOWN_FILMS_COUNT`,
  RESET_SHOWN_FILMS_COUNT: `RESET_SHOWN_FILMS_COUNT`,
};

const initialState = {
  currentGenre: ALL_GENRES_FILTER,
  shownFilmsCount: SHOWN_FILMS_INITIAL_COUNT,
};

// Reducer

export const catalogReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_CURRENT_GENRE:
      return extend(state, {currentGenre: action.payload});

    case ActionType.INCREASE_SHOWN_FILMS_COUNT:
      return extend(state, {shownFilmsCount: state.shownFilmsCount + action.payload});

    case ActionType.RESET_SHOWN_FILMS_COUNT:
      return extend(state, {shownFilmsCount: SHOWN_FILMS_INITIAL_COUNT});
  }

  return state;
};

// Actions

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


// Selectors

const nameSpace = NameSpace.CATALOG;

export const selectCurrentGenre = (state) => state[nameSpace].currentGenre;
export const selectShownFilmsCount = (state) => state[nameSpace].shownFilmsCount;

export const selectFilteredFilms = createSelector(
    [selectFilms, selectCurrentGenre],
    (films, genre)=> genre === ALL_GENRES_FILTER ? films : films.filter((film) => isFilmBelongsToGenre(film, genre))
);

export const selectIsAllFilmsShown = (state) => selectShownFilmsCount(state) >= selectFilteredFilms(state).length;
export const selectGenreList = (state) => getGenresList(selectFilms(state));
