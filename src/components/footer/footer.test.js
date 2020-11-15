import React from "react";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import Footer from "./footer";

describe(`<Footer> renders correctly`, () => {
  it(`With active link`, () => {
    const tree = renderer
    .create(<MemoryRouter><Footer/></MemoryRouter>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Without active link`, () => {
    const tree = renderer
    .create(<MemoryRouter><Footer isLinkActive={false}/></MemoryRouter>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
