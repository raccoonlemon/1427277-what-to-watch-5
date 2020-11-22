import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmInfoTabs from './film-info-tabs';
import {FilmInfoTab} from '../../const';

configure({adapter: new Adapter()});

jest.mock(`react-router-dom`, () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

const evt = {preventDefault: ()=>{}};
const onClick = jest.fn();

const [firstTab] = Object.values(FilmInfoTab);

describe(`Click on film info tab`, () => {
  it(`On active tab`, () => {
    const filmInfoTabs = shallow(<FilmInfoTabs onTabChange={onClick} activeTab={firstTab}/>);
    const tabs = filmInfoTabs.find(`.movie-nav__link`);
    tabs.at(0).simulate(`click`, evt);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it(`On not-active tab`, () => {
    const filmInfoTabs = shallow(<FilmInfoTabs onTabChange={onClick} activeTab={firstTab}/>);
    const tabs = filmInfoTabs.find(`.movie-nav__link`);
    tabs.at(1).simulate(`click`, evt);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
