import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {film} from "../../mocks/films";
import FilmSmallCard from "./film-small-card";

const renderer = new ShallowRenderer();
const noop = ()=>{};

describe(`<FilmSmallCard> renders correctly`, () => {

  it(`when card is not active`, () => {
    renderer.render(
        <FilmSmallCard
          film={film}
          isCardActive={false}
          onMouseEnter={noop}
          onMouseLeave = {noop}/>
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it(`when card is active`, () => {
    renderer.render(
        <FilmSmallCard
          film={film}
          isCardActive={true}
          onMouseEnter={noop}
          onMouseLeave = {noop}/>
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

});
