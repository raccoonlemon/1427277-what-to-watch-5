import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer";

describe(`<Footer> renders correctly`, () => {
  it(`With active link`, () => {
    const tree = renderer
    .create(<Footer/>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Without active link`, () => {
    const tree = renderer
    .create(<Footer isLinkActive={false}/>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
