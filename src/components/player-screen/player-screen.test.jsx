import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {film} from "../../mocks/films";
import {PlayerScreen} from "./player-screen";

const renderer = new ShallowRenderer();
const noop = ()=>{};

it(`<FilmInfoDeatils> renders correctly`, () => {
  renderer.render(
      <PlayerScreen
        film={film}
        id = {film.id}
        isFilmLoaded = {true}
        loadFilmInfo = {noop}/>
  );
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
