import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import ShowMoreButton from "./show-more-button";

const noop = () => {};
const renderer = new ShallowRenderer();

it(`<ShowMoreButton> renders correctly`, () => {
  renderer.render(<ShowMoreButton onClick={noop}/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
