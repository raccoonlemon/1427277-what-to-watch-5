import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {Path} from "../../const";
import {PrivateRoute} from "./private-route";

const renderer = new ShallowRenderer();
const noop = ()=>{};

it(`<PrivateRoute> renders correctly`, () => {
  renderer.render(
      <PrivateRoute
        isUserAuthorized={true}
        exact = {true}
        path = {Path.MAIN_PAGE}
        render = {noop}
      />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
