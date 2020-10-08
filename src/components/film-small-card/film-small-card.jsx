import PropTypes from 'prop-types';
import React from "react";
import {Link} from 'react-router-dom';
import {filmShape} from '../../utils/props-validation';

const FilmSmallCard = ({film, onMouseEnter, onMouseLeave})=>{
  const {title, posterSmall, id} = film;
  const link = `/films/${id}`;
  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={()=>onMouseEnter(id)} onMouseLeave={onMouseLeave}>
      <div className="small-movie-card__image">
        <img src={posterSmall} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={link}>{title}</Link>
      </h3>
    </article>);
};

FilmSmallCard.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  film: filmShape.isRequired
};

export default FilmSmallCard;
