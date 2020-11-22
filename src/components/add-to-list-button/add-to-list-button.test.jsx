import React from "react";
import renderer from "react-test-renderer";
import {AddToListButton} from "./add-to-list-button";

const noop = () => {};
const id = `1`;
describe(`<AddToListButton> renders correctly`, () => {
  it(`film is in the list`, () => {
    const tree = renderer
    .create(<AddToListButton
      id ={id}
      isFavorite = {true}
      isUserLogged = {true}
      onClickAction={noop}
      redirectAction={noop}/>);

    expect(tree).toMatchSnapshot();
  });

  it(`film is not in the list`, () => {
    const tree = renderer
    .create(<AddToListButton
      id ={id}
      isFavorite = {false}
      isUserLogged = {true}
      onClickAction={noop}
      redirectAction={noop}/>);

    expect(tree).toMatchSnapshot();
  });

});
