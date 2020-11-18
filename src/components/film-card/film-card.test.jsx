import React from "react";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {film} from "../../mocks/films";
import FilmCard from "./film-card";

jest.mock(`../add-to-list-button/add-to-list-button`, () => `AddToListButton`);

it(`<FilmCard> renders correctly`, () => {
  const tree = renderer
    .create(<MemoryRouter><FilmCard film={film} isUserLogged={true}/></MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
