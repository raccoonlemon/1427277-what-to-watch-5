import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {film, films} from "../../mocks/films";
import {reviews} from "../../mocks/reviews";
import {FilmScreen} from "./film-screen";

// TODO. Исправить. Не работает. Проблема с вложенными компонентами, которые
// подключены к store.
const noop = ()=>{};
const renderer = new ShallowRenderer();

it(`<FilmScreen> renders correctly`, () => {
  renderer.render(
      <FilmScreen
        id = "1"
        film = {film}
        isFilmLoaded = {true}
        reviews = {reviews}
        loadFilmInfoAction={noop}
        similarFilms = {films}
        isUserLogged = {false}
      />
  );
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
