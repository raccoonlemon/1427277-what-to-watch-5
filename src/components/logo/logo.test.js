import React from "react";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import Logo from "./logo";

describe(`<Logo> renders correctly`, () => {
  it(`With active link`, () => {
    const tree = renderer
    .create(<MemoryRouter><Logo/></MemoryRouter>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Without active link`, () => {
    const tree = renderer
    .create(<MemoryRouter><Logo isLinkActive={false}/></MemoryRouter>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
