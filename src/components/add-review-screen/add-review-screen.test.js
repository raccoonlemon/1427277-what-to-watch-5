import React from "react";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {film} from "../../mocks/films";
import {AddReviewScreen} from "./add-review-screen";

const noop = () => {};
const id = `1`;
const mockFilm = film;

jest.mock(`../header/header`, () => `Header`);

describe(`<AddReviewScreen> renders correctly`, () => {
  it(`while posting review`, () => {
    const tree = renderer
    .create(<MemoryRouter>
      <AddReviewScreen
        id ={id}
        film = {mockFilm}
        isFilmLoaded = {true}
        isRequested = {false}
        isRequestFailed = {false}
        errorCode = {0}
        loadFilmAction={noop}
        postReviewAction={noop}/>
    </MemoryRouter>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  // it(`in general`, () => {
  //   const tree = renderer
  //   .create(<AddReviewScreen
  //     id ={id}
  //     film = {mockFilm}
  //     isFilmLoaded = {true}
  //     isRequested = {false}
  //     isRequestFailed = {false}
  //     errorCode = {``}
  //     loadFilmAction={noop}
  //     postReviewAction={noop}/>)
  //   .toJSON();

  //   expect(tree).toMatchSnapshot();
  // });

});
