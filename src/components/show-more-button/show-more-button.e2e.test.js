import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShowMoreButton from './show-more-button';

configure({adapter: new Adapter()});

const onClick = jest.fn();

it(`Click on "Show more" button`, () => {
  const showMoreButton = shallow(<ShowMoreButton onClick={onClick}/>);
  const button = showMoreButton.find(`.catalog__button`);
  button.simulate(`click`);
  expect(onClick).toHaveBeenCalledTimes(1);
});
