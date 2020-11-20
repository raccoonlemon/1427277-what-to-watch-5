import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Header from "./header";

const renderer = new ShallowRenderer();

describe(`<Header> renders correctly`, () => {

  it(`with user menu`, () => {
    renderer.render(<Header needToShowUserMenu={true}/>);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it(`without user menu`, () => {
    renderer.render(<Header needToShowUserMenu={false}/>);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

});
