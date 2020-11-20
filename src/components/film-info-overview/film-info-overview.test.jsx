import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {film} from "../../mocks/films";
import {reviews} from "../../mocks/reviews";
import FilmInfoOverview from "./film-info-overview";

const renderer = new ShallowRenderer();

it(`<FilmInfoOverview> renders correctly`, () => {
  renderer.render(<FilmInfoOverview film={film} reviews={reviews}/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
