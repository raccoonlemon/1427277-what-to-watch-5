import PropTypes from 'prop-types';
import React, {useState} from "react";
import {filmShape} from "../../utils/props-validation";
import FilmSmallCard from "../film-small-card/film-small-card";

const FilmsList = (props) => {
  const {films} = props;
  const [activeItemId, setActiveItem] = useState(null);
  return (<div className="catalog__movies-list">
    {films.map((it)=>(
      <FilmSmallCard
        key = {it.id}
        onMouseEnter ={()=>setActiveItem(it.id)}
        onMouseLeave = {()=>setActiveItem(null)}
        film = {it}
        isCardActive = {it.id === activeItemId}/>
    ))}
  </div>);
};

export default FilmsList;

FilmsList.propTypes = {
  activeItemId: PropTypes.string,
  films: PropTypes.arrayOf(filmShape).isRequired,
};

