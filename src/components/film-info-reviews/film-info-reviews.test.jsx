import React from "react";
import renderer from "react-test-renderer";
import {reviews} from "../../mocks/reviews";
import FilmInfoReviews from "./film-info-reviews";

it(`<FilmInfoReviews> renders correctly`, () => {
  const tree = renderer
    .create(<FilmInfoReviews reviews={reviews}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
