import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {film} from "../../mocks/films";
import {reviews} from "../../mocks/reviews";
import FilmInfo from "./film-info";

const renderer = new ShallowRenderer();

jest.mock(`react-router-dom`, () => ({
  __esModule: true,
  useLocation: jest.fn().mockReturnValue({
    hash: ``,
  }),
}));

it(`<FilmInfo> renders correctly`, () => {
  renderer.render(
      <FilmInfo
        film={film}
        reviews={reviews}/>
  );
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
