import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {film} from "../../mocks/films";
import FilmInfoDetails from "./film-info-details";

const renderer = new ShallowRenderer();

it(`<FilmInfoDeatils> renders correctly`, () => {
  renderer.render(<FilmInfoDetails film={film}/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
