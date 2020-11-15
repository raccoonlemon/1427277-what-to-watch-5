import React from "react";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import Header from "./Header";

jest.mock(`../user-menu/user-menu`, () => `UserMenu`);
it(`<Header> renders correctly`, () => {
  const tree = renderer
    .create(<MemoryRouter><Header needToShowUserMenu={true}/></MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
