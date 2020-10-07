import PropTypes from 'prop-types';
import React from "react";
import {Link} from 'react-router-dom';

const FilmSmallCard = ({film, onMouseEnter, onMouseLeave})=>{
  const {title, posterSmall, id} = film;
  const link = `/films/${id}`;
  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={()=>onMouseEnter(id)} onMouseLeave={onMouseLeave}>
      <div className="small-movie-card__image">
        <img src={posterSmall} alt="Midnight Special" width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={link}>{title}</Link>
      </h3>
    </article>);
};

FilmSmallCard.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  film: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    posterSmall: PropTypes.string.isRequired}).isRequired
};

export default FilmSmallCard;
