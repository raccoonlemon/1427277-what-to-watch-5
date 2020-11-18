import React from "react";
import renderer from "react-test-renderer";
import {film, films} from "../../mocks/films";
import {reviews} from "../../mocks/reviews";
import {FilmScreen} from "./film-screen";

// TODO. Исправить. Не работает. Проблема с вложенными компонентами, которые
// подключены к store.
const noop = ()=>{};
it(`<FilmScreen> renders correctly`, () => {
  const tree = renderer
    .create(
        <FilmScreen
          id = "1"
          film = {film}
          isFilmLoaded = {true}
          reviews = {reviews}
          loadFilmInfoAction={noop}
          similarFilms = {films}
          isUserLogged = {false}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
