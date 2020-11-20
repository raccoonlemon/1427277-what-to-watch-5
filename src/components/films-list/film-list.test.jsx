import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {films} from "../../mocks/films";
import FilmsList from "./films-list";

const renderer = new ShallowRenderer();

it(`<FilmsList> renders correctly`, () => {
  renderer.render(<FilmsList films={films} activeItemId={null}/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
