import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {reviews} from "../../mocks/reviews";
import FilmInfoReviews from "./film-info-reviews";

const renderer = new ShallowRenderer();

it(`<FilmInfoReviews> renders correctly`, () => {
  renderer.render(<FilmInfoReviews reviews={reviews}/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
