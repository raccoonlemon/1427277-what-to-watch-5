import React from "react";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {UserMenu} from "./user-menu";

describe(`<UserMenu> renders correctly`, () => {
  it(`With logged user`, () => {
    const tree = renderer
    .create(<MemoryRouter><UserMenu isUserLogged={true}/></MemoryRouter>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Without logged user`, () => {
    const tree = renderer
    .create(<MemoryRouter><UserMenu isUserLogged={false}/></MemoryRouter>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
