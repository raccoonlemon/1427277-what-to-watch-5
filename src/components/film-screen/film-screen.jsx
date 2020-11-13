import PropTypes from 'prop-types';
import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {Path} from "../../const";
import {fetchFilmById, fetchReviewsByFilmId} from '../../store/api-actions';
import {selectFilm, selectIsFilmLoaded, selectIsUserLogged, selectReviews, selectSimilarFilms} from '../../store/selectors';
import {filmShape, reviewShape} from "../../utils/props-validation";
import FilmInfo from '../film-info/film-info';
import FilmsList from '../films-list/films-list';
import Footer from '../footer/footer';
import Header from '../header/header';


const FilmScreen = (props) => {

  const {isFilmLoaded, loadFilmInfo, id} = props;

  useEffect(() => {
    if (!isFilmLoaded) {
      loadFilmInfo(id);
    }
  }, [id]);

  const {film, reviews, similarFilms, isUserLogged} = props;
  const {title, genre, year, poster, background, backgroundColor} = film;
  return (<React.Fragment>
    <section className="movie-card movie-card--full" style={{backgroundColor}}>
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
              {isUserLogged && <Link className="btn movie-card__button" to={Path.addReview(id)}>Add review</Link>}
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={poster} alt={`${title} poster`} width="218" height="327" />
          </div>
          <FilmInfo film={film} reviews={reviews}/>
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

const mapStateToProps = (state, {id}) => ({
  film: selectFilm(state),
  isFilmLoaded: selectIsFilmLoaded(id)(state),
  reviews: selectReviews(state),
  similarFilms: selectSimilarFilms(state),
  isUserLogged: selectIsUserLogged(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFilmInfo(id) {
    dispatch(fetchFilmById(id));
    dispatch(fetchReviewsByFilmId(id));
  }
});

FilmScreen.propTypes = {
  loadFilmInfo: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  film: filmShape.isRequired,
  isFilmLoaded: PropTypes.bool.isRequired,
  reviews: PropTypes.arrayOf(reviewShape).isRequired,
  similarFilms: PropTypes.arrayOf(filmShape).isRequired,
  isUserLogged: PropTypes.bool.isRequired,
};

export {FilmScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FilmScreen);

