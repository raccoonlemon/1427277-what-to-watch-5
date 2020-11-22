import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {UserMenu} from "./user-menu";
import {user} from "../../mocks/user";

const renderer = new ShallowRenderer();

describe(`<UserMenu> renders correctly`, () => {
  it(`With logged user`, () => {
    renderer.render(
        <UserMenu
          isUserLogged={true}
          user = {user}
        />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it(`Without logged user`, () => {
    renderer.render(
        <UserMenu
          isUserLogged={false}
          user = {user}
        />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
