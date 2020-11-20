import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {ALL_GENRES_FILTER} from "../../const";
import {films} from "../../mocks/films";
import {getGenresList} from "../../utils/films";
import {FilmCatalog} from "./film-catalog";

const noop = ()=>{};
const renderer = new ShallowRenderer();

it(`<FilmCatalog> renders correctly`, () => {
  renderer.render(
      <FilmCatalog
        films={films}
        currentGenre={ALL_GENRES_FILTER}
        genres = {getGenresList(films)}
        isAllFilmsShown = {true}
        onGenreChangeAction = {noop}
        onLoadMoreButtonClickAction = {noop}/>
  );
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});


