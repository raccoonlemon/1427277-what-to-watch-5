import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import App from "./app";

const renderer = new ShallowRenderer();

it(`<App> renders correctly`, () => {
  renderer.render(<App/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
