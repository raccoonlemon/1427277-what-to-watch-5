import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {FilmInfoTab} from "../../const";
import FilmInfoTabs from "./film-info-tabs";

const noop = ()=>{};
const renderer = new ShallowRenderer();

jest.mock(`react-router-dom`, () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

it(`<FilmInfoTabs> renders correctly`, () => {
  renderer.render(
      <FilmInfoTabs onTabChange={noop} activeTab={FilmInfoTab.OVERVIEW}/>
  );
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
