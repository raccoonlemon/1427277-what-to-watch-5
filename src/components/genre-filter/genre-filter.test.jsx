import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import GenreFilter from "./genre-filter";
import {genres} from "../../mocks/films";

const noop = ()=>{};
const renderer = new ShallowRenderer();

it(`<GenreFilter> renders correctly`, () => {
  renderer.render(
      <GenreFilter
        onFilterChage={noop}
        activeFilter={genres[0]}
        genres={genres}/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

