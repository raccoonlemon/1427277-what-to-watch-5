import React from "react";
import renderer from "react-test-renderer";
import GenreFilter from "./genre-filter";
import {genres} from "../../mocks/films";

const noop = ()=>{};
it(`<GenreFilter> renders correctly`, () => {
  const tree = renderer
    .create(<GenreFilter onFilterChage={noop} activeFilter={genres[0]} genres={genres}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
