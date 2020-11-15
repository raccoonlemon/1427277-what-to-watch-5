import React from "react";
import renderer from "react-test-renderer";
import {FilmInfoTab} from "../../const";
import FilmInfoTabs from "./film-info-tabs";

const noop = ()=>{};

jest.mock(`react-router-dom`, () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

it(`<FilmInfoTabs> renders correctly`, () => {
  const tree = renderer
    .create(<FilmInfoTabs onTabChange={noop} activeTab={FilmInfoTab.OVERVIEW}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
