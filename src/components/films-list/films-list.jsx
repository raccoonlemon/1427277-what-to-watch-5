import PropTypes from 'prop-types';
import React from "react";
import withActiveItem from '../../HOC/with-active-item';
import {filmShape} from "../../utils/props-validation";
import FilmSmallCard from "../film-small-card/film-small-card";

const FilmsList = (props) => {
  const {films, setActiveItem, removeActiveItem, activeItemId} = props;

  const filmsList = films.map((it)=>(
    <FilmSmallCard
      key = {it.id}
      onMouseEnter ={setActiveItem}
      onMouseLeave = {removeActiveItem}
      film = {it}
      isCardActive = {it.id === activeItemId}/>));
  return (
    <div className="catalog__movies-list">
      {filmsList}
    </div>);
};

FilmsList.propTypes = {
  setActiveItem: PropTypes.func.isRequired,
  removeActiveItem: PropTypes.func.isRequired,
  activeItemId: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(filmShape).isRequired,
};

export {FilmsList};
export default withActiveItem(FilmsList);

