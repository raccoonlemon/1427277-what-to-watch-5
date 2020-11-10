import React from "react";
import renderer from "react-test-renderer";
import Logo from "./Logo";

describe(`<Logo> renders correctly`, () => {
  // it(`With active link`, () => {
  //   const tree = renderer
  //   .create(<Logo/>)
  //   .toJSON();

  //   expect(tree).toMatchSnapshot();
  // });

  it(`Without active link`, () => {
    const tree = renderer
    .create(<Logo isLinkActive={false}/>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
