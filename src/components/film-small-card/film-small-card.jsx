import PropTypes from 'prop-types';
import React from "react";

const FilmSmallCard = ({film})=>{
  const {title, posterSmall} = film;
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={posterSmall} alt="Midnight Special" width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>);
};

FilmSmallCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterSmall: PropTypes.string.isRequired}).isRequired
};

export default FilmSmallCard;
