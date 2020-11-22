import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {film} from "../../mocks/films";
import FilmCard from "./film-card";

const renderer = new ShallowRenderer();

it(`<FilmCard> renders correctly`, () => {
  renderer.render(<FilmCard film={film} isUserLogged={true}/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
