import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {AddToListButton} from "./add-to-list-button";

configure({adapter: new Adapter()});

const id = `1`;
const selector = `.btn--list`;

describe(`<AddToListButton> renders correctly`, () => {

  it(`user is logged`, () => {
    const onClickAction = jest.fn();
    const redirectAction = jest.fn();
    const addToListButton = shallow(<AddToListButton
      id ={id}
      isFavorite = {true}
      isUserLogged = {true}
      onClickAction={onClickAction}
      redirectAction={redirectAction}/>);
    const button = addToListButton.find(selector);
    button.simulate(`click`);
    expect(onClickAction).toHaveBeenCalledTimes(1);
    expect(redirectAction).toHaveBeenCalledTimes(0);
  });

  it(`user is not logged`, () => {
    const onClickAction = jest.fn();
    const redirectAction = jest.fn();
    const addToListButton = shallow(<AddToListButton
      id ={id}
      isFavorite = {true}
      isUserLogged = {false}
      onClickAction={onClickAction}
      redirectAction={redirectAction}/>);
    const button = addToListButton.find(selector);
    button.simulate(`click`);
    expect(onClickAction).toHaveBeenCalledTimes(0);
    expect(redirectAction).toHaveBeenCalledTimes(1);
  });
});
