import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {films} from "../../mocks/films";
import {MyListScreen} from "./my-list-screen";

const renderer = new ShallowRenderer();

it(`<MyListScreen> renders correctly`, () => {
  renderer.render(<MyListScreen films={films}/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
