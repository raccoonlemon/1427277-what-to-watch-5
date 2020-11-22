
import {ALL_GENRES_FILTER, SHOWN_FILMS_INITIAL_COUNT} from "../../const";
import {ActionType, catalogReducer, changeCurrentGenre, increaseShownFilmsCount, resetShownFilmsCount} from "./catalog";

describe(`Catalog action creators returns correct actions`, () => {

  it(`change current genre`, () => {
    expect(changeCurrentGenre(`genre`)).toEqual({
      type: ActionType.CHANGE_CURRENT_GENRE,
      payload: `genre`,
    });
  });

  it(`increase shown films count`, () => {
    expect(increaseShownFilmsCount(1)).toEqual({
      type: ActionType.INCREASE_SHOWN_FILMS_COUNT,
      payload: 1,
    });
  });

  it(`reset shown films count`, () => {
    expect(resetShownFilmsCount()).toEqual({
      type: ActionType.RESET_SHOWN_FILMS_COUNT,
      payload: {},
    });
  });


});

describe(`User reducer works correctly`, () => {

  it(`without additional parameters should return initial state`, () => {
    expect(catalogReducer(void 0, {})).toEqual({
      currentGenre: ALL_GENRES_FILTER,
      shownFilmsCount: SHOWN_FILMS_INITIAL_COUNT,
    });
  });

  it(`should change current genre`, () => {
    expect(catalogReducer({
      currentGenre: ALL_GENRES_FILTER,
    }, {
      type: ActionType.CHANGE_CURRENT_GENRE,
      payload: `genre`
    })).toEqual({
      currentGenre: `genre`
    });
  });

  it(`should increase shown films count`, () => {
    expect(catalogReducer({
      shownFilmsCount: 8,
    }, {
      type: ActionType.INCREASE_SHOWN_FILMS_COUNT,
      payload: 8
    })).toEqual({
      shownFilmsCount: 16
    });
  });

  it(`should reser shown films count`, () => {
    expect(catalogReducer({
      shownFilmsCount: 8,
    }, {
      type: ActionType.RESET_SHOWN_FILMS_COUNT,
      payload: {}
    })).toEqual({
      shownFilmsCount: SHOWN_FILMS_INITIAL_COUNT
    });
  });

});
