import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {film} from "../../mocks/films";
import {MainScreen} from "./main-screen";

const renderer = new ShallowRenderer();

it(`<MainScreen> renders correctly`, () => {
  renderer.render(<MainScreen film={film}/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
