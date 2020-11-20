import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {SignInScreen} from "./sign-in-screen";

const renderer = new ShallowRenderer();
const noop = ()=>{};

it(`<SignInScreen> renders correctly`, () => {
  renderer.render(
      <SignInScreen
        isRequested={false}
        isRequestFailed = {false}
        errorCode = {0}
        onSubmitAction = {noop}
      />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
