import React from "react";
import PropTypes from 'prop-types';
import FilmSmallCard from "../film-small-card/film-small-card";

const FilmsList = ({films})=>{

  const filmsList = films.map((it)=>(<FilmSmallCard key = {it.id} film = {it}/>));

  return (
    <div className="catalog__movies-list">
      {filmsList}
    </div>);
};

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmsList;
