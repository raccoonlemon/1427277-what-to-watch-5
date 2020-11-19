import PropTypes from 'prop-types';
import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {fetchFilmById, fetchReviewsByFilmId} from '../../store/api-actions';
import {selectFilm, selectIsFilmLoaded, selectIsUserLogged, selectReviews, selectSimilarFilms} from '../../store/selectors';
import {filmShape, reviewShape} from "../../utils/props-validation";
import FilmCard from '../film-card/film-card';
import FilmInfo from '../film-info/film-info';
import FilmsList from '../films-list/films-list';
import Footer from '../footer/footer';
import Header from '../header/header';

const FilmScreen = (props) => {

  const {isFilmLoaded, loadFilmInfoAction, id, isUserLogged} = props;

  useEffect(() => {
    if (!isFilmLoaded) {
      loadFilmInfoAction(id);
    }
  }, [id]);

  const {film, reviews, similarFilms} = props;
  const {title, poster, background, backgroundColor} = film;
  return (<React.Fragment>
    <section className="movie-card movie-card--full" style={{backgroundColor}}>
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={background} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header className="movie-card__head"/>
        <FilmCard film={film} isUserLogged = {isUserLogged}/>
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

FilmScreen.propTypes = {
  loadFilmInfoAction: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  film: filmShape.isRequired,
  isFilmLoaded: PropTypes.bool.isRequired,
  reviews: PropTypes.arrayOf(reviewShape).isRequired,
  similarFilms: PropTypes.arrayOf(filmShape).isRequired,
  isUserLogged: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, {id}) => ({
  film: selectFilm(state),
  isFilmLoaded: selectIsFilmLoaded(id)(state),
  reviews: selectReviews(state),
  similarFilms: selectSimilarFilms(state),
  isUserLogged: selectIsUserLogged(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFilmInfoAction(id) {
    dispatch(fetchFilmById(id));
    dispatch(fetchReviewsByFilmId(id));
  },
});

export {FilmScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FilmScreen);

