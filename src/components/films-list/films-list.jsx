import PropTypes from 'prop-types';
import React from "react";
import withActiveItem from '../../HOC/with-active-item';
import {filmShape} from "../../utils/props-validation";
import FilmSmallCard from "../film-small-card/film-small-card";

export const FilmsList = (props) => {
  const {films, setActiveItem, removeActiveItem, activeItemId} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((it)=>(
        <FilmSmallCard
          key = {it.id}
          onMouseEnter ={setActiveItem}
          onMouseLeave = {removeActiveItem}
          film = {it}
          isCardActive = {it.id === activeItemId}/>
      ))}
    </div>);
};

FilmsList.propTypes = {
  setActiveItem: PropTypes.func.isRequired,
  removeActiveItem: PropTypes.func.isRequired,
  activeItemId: PropTypes.string,
  films: PropTypes.arrayOf(filmShape).isRequired,
};

export default withActiveItem(FilmsList);

