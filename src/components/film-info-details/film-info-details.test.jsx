import React from "react";
import renderer from "react-test-renderer";
import {film} from "../../mocks/films";
import FilmInfoDetails from "./film-info-details";

it(`<FilmInfoDeatils> renders correctly`, () => {
  const tree = renderer
    .create(<FilmInfoDetails film={film}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
