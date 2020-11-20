import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import VideoPlayer from "./video-player";

const renderer = new ShallowRenderer();

it(`<VideoPlayer> renders correctly`, () => {
  renderer.render(<VideoPlayer poster={`123`} src={`123`}/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
