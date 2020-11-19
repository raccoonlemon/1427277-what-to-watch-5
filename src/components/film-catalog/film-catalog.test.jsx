import React from "react";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {ALL_GENRES_FILTER} from "../../const";
import {films} from "../../mocks/films";
import {getGenresList} from "../../utils/films";
import {FilmCatalog} from "./film-catalog";

const noop = ()=>{};

it(`<FilmCatalog> renders correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <FilmCatalog
            films={films}
            currentGenre={ALL_GENRES_FILTER}
            genres = {getGenresList(films)}
            isAllFilmsShown = {true}
            onGenreChangeAction = {noop}
            onLoadMoreButtonClickAction = {noop}/>
        </MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
