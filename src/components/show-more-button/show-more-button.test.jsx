import React from "react";
import renderer from "react-test-renderer";
import ShowMoreButton from "./show-more-button";

const noop = () => {};

it(`<ShowMoreButton> renders correctly`, () => {
  const tree = renderer
    .create(<ShowMoreButton onClick={noop}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

