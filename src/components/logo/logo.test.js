import React from "react";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import Logo from "./logo";

it(`<Logo> renders correctly`, () => {
  const tree = renderer
    .create(<MemoryRouter><Logo/></MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
