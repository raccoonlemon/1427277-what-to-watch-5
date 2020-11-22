import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Logo from "./logo";

const renderer = new ShallowRenderer();

it(`<Logo> renders correctly`, () => {
  renderer.render(<Logo/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
