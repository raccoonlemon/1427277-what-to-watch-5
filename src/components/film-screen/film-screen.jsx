import PropTypes from 'prop-types';
import React from "react";
import {Link} from "react-router-dom";
import {FilmRating, FILM_RATING_SCALE, SHORT_LIST_STARRING_COUNT} from "../../const";
import {toCamelCase, splitArrayToSegments} from '../../utils/common';
import {getDateTimeForHTML, getFormattedFilmDuration, getFormattedReviewDate} from '../../utils/date-time-formatter';
import {filmShape, reviewShape} from "../../utils/props-validation";
import FilmsList from '../films-list/films-list';
import {Tabs} from '../tabs/tabs';

const getAverageRating = (reviews)=>{
  const rewiewsCount = reviews.length;

  if (!reviews || !reviews.length) {
    return 0;
  }

  const totalRating = reviews.reduce((result, review)=>{
    return result + review.rating;
  }, 0);
  const averageRating = Math.round(totalRating / rewiewsCount * 10) / 10;

  return averageRating;
};

const getShortStarringLine = (starring)=>{
  return starring.slice(0, SHORT_LIST_STARRING_COUNT).join(`, `);
};

const getRatingDescription = (reviews) =>{

  if (!reviews || !reviews.length) {
    return FilmRating.NOT_RATED;
  }
  const averageRating = getAverageRating(reviews);

  for (const filmRating of FILM_RATING_SCALE) {
    if (averageRating >= filmRating.minScore) {
      return filmRating.rating;
    }
  }

  return FilmRating.NOT_RATED;

};

const splitReviewsToColumns = (reviews, columnsCount) => {
  return splitArrayToSegments(reviews, columnsCount);
};


const FilmInfoTabs = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

const renderTabList = (activeTab, changeTabHandler)=>{
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Object.values(FilmInfoTabs).map((tab)=>{
          const classNames = [`movie-nav__item`];
          if (tab === activeTab) {
            classNames.push(`movie-nav__item--active`);
          }
          return (
            <li key = {tab} className={classNames.join(` `)}>
              <a href="#" className="movie-nav__link" data-tab = {tab} onClick = {changeTabHandler}>{tab}</a>
            </li>);
        })}
      </ul>
    </nav>);
};

const FilmScreen = (props) => {
  const {film, reviews, similarFilms} = props;

  const {title, genre, director, year, description, poster, background, starring, duration, id} = film;

  const addReviewlink = `/films/${id}/review`;

  const starringShortList = getShortStarringLine(starring);
  const averageRating = getAverageRating(reviews);
  const rewiewsCount = reviews.length;
  const ratingDescription = getRatingDescription(reviews);

  const REVIEWS_COLUMNS_COUNT = 2;
  const reviewsByColumns = splitReviewsToColumns(reviews, REVIEWS_COLUMNS_COUNT);

  return (<React.Fragment>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={background} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <Link className="logo__link" to="/">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{year}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              <Link className="btn movie-card__button" to={addReviewlink}>Add review</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={poster} alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>
          <div className="movie-card__desc">
            <Tabs renderTabList = {renderTabList} initialTab = {FilmInfoTabs.OVERVIEW}>

              <React.Fragment key={FilmInfoTabs.OVERVIEW}>
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

                  <p className="movie-card__starring"><strong>Starring: {starringShortList} and other</strong></p>
                </div>
              </React.Fragment>

              <React.Fragment key={FilmInfoTabs.DETAILS}>

                <div className="movie-card__text movie-card__row">
                  <div className="movie-card__text-col">
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Director</strong>
                      <span className="movie-card__details-value">{director}</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Starring</strong>
                      <span className="movie-card__details-value">
                        {starring.map((name, index)=>{
                          return (
                            <React.Fragment key={`${toCamelCase(name)}${index}`}>
                              {name}{index < starring.length - 1 && `,`}{index < starring.length - 1 && <br/>}
                            </React.Fragment>);
                        })}

                      </span>
                    </p>
                  </div>

                  <div className="movie-card__text-col">
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Run Time</strong>
                      <span className="movie-card__details-value">{getFormattedFilmDuration(duration)}</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Genre</strong>
                      <span className="movie-card__details-value">{genre}</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Released</strong>
                      <span className="movie-card__details-value">{year}</span>
                    </p>
                  </div>
                </div>
              </React.Fragment>

              <React.Fragment key={FilmInfoTabs.REVIEWS}>
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
              </React.Fragment>
            </Tabs>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">

      {similarFilms.length > 0 &&
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films = {similarFilms}/>
        </section>}

      <footer className="page-footer">
        <div className="logo">
          <Link className="logo__link logo__link--light" to="/">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </React.Fragment>);
};

FilmScreen.propTypes = {
  film: filmShape.isRequired,
  reviews: PropTypes.arrayOf(reviewShape).isRequired,
  similarFilms: PropTypes.arrayOf(filmShape).isRequired
};

export default FilmScreen;

