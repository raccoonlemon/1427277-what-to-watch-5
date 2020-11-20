import React from "react";
// import {MemoryRouter} from "react-router-dom";
import ShallowRenderer from "react-test-renderer/shallow";
import {film} from "../../mocks/films";
import {AddReviewScreen} from "./add-review-screen";

const noop = () => {};
const id = `1`;
const mockFilm = film;
const renderer = new ShallowRenderer();

it(`<AddReviewScreen> renders correctly`, () => {
  renderer.render(
      <AddReviewScreen
        id ={id}
        film = {mockFilm}
        isFilmLoaded = {true}
        isRequested = {false}
        isRequestFailed = {false}
        errorCode = {0}
        loadFilmAction={noop}
        postReviewAction={noop}/>
  );
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
