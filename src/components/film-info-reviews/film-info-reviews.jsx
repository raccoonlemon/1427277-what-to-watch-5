import React from "react";
import PropTypes from 'prop-types';
import {splitArrayToSegments} from "../../utils/common";
import {getDateTimeForHTML, getFormattedReviewDate} from "../../utils/date-time-formatter";
import {reviewShape} from "../../utils/props-validation";

const splitReviewsToColumns = (reviews, columnsCount) => {
  return splitArrayToSegments(reviews, columnsCount);
};

// TODO: загружать отзывы с сервера, GET /comments/: film_id
const FilmInfoReviews = (props) => {
  const {reviews} = props;

  const REVIEWS_COLUMNS_COUNT = 2;
  const reviewsByColumns = splitReviewsToColumns(reviews, REVIEWS_COLUMNS_COUNT);

  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        {reviewsByColumns.map((items, index)=>{
          return (
            <div className="movie-card__reviews-col" key={`column-` + index}>
              {items.map((item)=>{
                const {id: reviewId, date, text, author, rating} = item;
                return (
                  <div className="review" key={reviewId}>
                    <blockquote className="review__quote">
                      <p className="review__text">{text}</p>

                      <footer className="review__details">
                        <cite className="review__author">{author}</cite>
                        <time className="review__date" dateTime={getDateTimeForHTML(date)}>{getFormattedReviewDate(date)}</time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">{rating}</div>
                  </div>
                );
              })}
            </div>);
        })}
      </div>
    </React.Fragment>);
};

FilmInfoReviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewShape).isRequired
};

export default FilmInfoReviews;
