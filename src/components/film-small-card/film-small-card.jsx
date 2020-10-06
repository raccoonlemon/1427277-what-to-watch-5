import PropTypes from 'prop-types';
import React from "react";

const FilmSmallCard = ({film, onMouseEnter, onMouseLeave})=>{
  const {title, posterSmall, id} = film;
  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={()=>onMouseEnter(id)} onMouseLeave={onMouseLeave}>
      <div className="small-movie-card__image">
        <img src={posterSmall} alt="Midnight Special" width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
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
