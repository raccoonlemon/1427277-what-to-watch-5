import React from "react";
import renderer from "react-test-renderer";
import {film} from "../../mocks/films";
import {reviews} from "../../mocks/reviews";
import FilmInfoOverview from "./film-info-overview";

it(`<FilmInfoOverview> renders correctly`, () => {
  const tree = renderer
    .create(<FilmInfoOverview film={film} reviews={reviews}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
