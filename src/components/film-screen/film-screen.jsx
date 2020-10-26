import PropTypes from 'prop-types';
import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {FilmInfoTab, MAX_SIMILAR_FILM_COUNT, Path} from "../../const";
import {filmShape, reviewShape} from "../../utils/props-validation";
import FilmInfoDetails from '../film-info-details/film-info-details';
import FilmInfoOverview from '../film-info-overview/film-info-overview';
import FilmInfoReviews from '../film-info-reviews/film-info-reviews';
import FilmsList from '../films-list/films-list';
import FilmInfoTabs from '../film-info-tabs/film-info-tabs';
import Header from '../header/header';
import Footer from '../footer/footer';
import {connect} from 'react-redux';
import {getSimilarFilms} from '../../utils/films';


const FilmScreen = (props) => {
  const {film, reviews, similarFilms} = props;

  const {title, genre, year, poster, background, id} = film;

  const DEFAULT_TAB = FilmInfoTab.OVERVIEW;

  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.hash.replace(`#`, ``) || DEFAULT_TAB);
  useEffect(() => setActiveTab(location.hash.replace(`#`, ``) || DEFAULT_TAB), [location.hash]);

  return (<React.Fragment>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={background} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header className="movie-card__head"/>

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
              <Link className="btn movie-card__button" to={Path.addReview(id)}>Add review</Link>
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
            <FilmInfoTabs onTabChange = {setActiveTab} activeTab = {activeTab}/>
            {activeTab === FilmInfoTab.OVERVIEW && <FilmInfoOverview film = {film} reviews = {reviews}/>}
            {activeTab === FilmInfoTab.DETAILS && <FilmInfoDetails film = {film} reviews = {reviews}/> }
            {activeTab === FilmInfoTab.REVIEWS && <FilmInfoReviews reviews = {reviews}/>}
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

      <Footer/>

    </div>
  </React.Fragment>);
};

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps;
  const film = state.films.find((element)=>element.id === id);
  return {
    film,
    reviews: state.reviews.filter((review)=>review.filmId === id),
    similarFilms: getSimilarFilms(state.films, film).slice(0, MAX_SIMILAR_FILM_COUNT),
  };
};

FilmScreen.propTypes = {
  film: filmShape.isRequired,
  reviews: PropTypes.arrayOf(reviewShape).isRequired,
  similarFilms: PropTypes.arrayOf(filmShape).isRequired
};

export {FilmScreen};
export default connect(mapStateToProps)(FilmScreen);

