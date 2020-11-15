import React from "react";
import PropTypes from 'prop-types';
import {getAverageRating, getRatingDescription} from "../../utils/films";
import {SHORT_LIST_STARRING_COUNT} from "../../const";
import {filmShape, reviewShape} from "../../utils/props-validation";

const getShortStarringLine = (starring)=>{
  if (Array.isArray(starring)) {
    return starring.slice(0, SHORT_LIST_STARRING_COUNT).join(`, `);
  }
  return starring;
};

const FilmInfoOverview = (props) => {
  const {film, reviews} = props;
  const {director, starring, description} = film;

  const averageRating = getAverageRating(reviews);
  const rewiewsCount = reviews.length;
  const ratingDescription = getRatingDescription(reviews);

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{averageRating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingDescription}</span>
          <span className="movie-rating__count">{rewiewsCount} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {getShortStarringLine(starring)} and other</strong></p>
      </div>
    </React.Fragment>);
};

FilmInfoOverview.propTypes = {
  film: filmShape,
  reviews: PropTypes.arrayOf(reviewShape).isRequired,
};

export default FilmInfoOverview;
