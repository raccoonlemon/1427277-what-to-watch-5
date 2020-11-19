import PropTypes from 'prop-types';
import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {Path} from "../../const";
import {fetchFilmById, fetchReviewsByFilmId} from '../../store/api-actions';
import {selectFilm, selectIsFilmLoaded, selectIsUserLogged, selectReviews, selectSimilarFilms} from '../../store/selectors';
import {filmShape, reviewShape} from "../../utils/props-validation";
import AddToListButton from '../add-to-list-button/add-to-list-button';
import PlayButton from '../play-button/play-button';
import FilmInfo from '../film-info/film-info';
import FilmsList from '../films-list/films-list';
import Footer from '../footer/footer';
import Header from '../header/header';

// TODO: разобраться с ошибкой валидации пропсов
// Warning: Failed prop type: The prop `film.id` is marked as required in `FilmInfo`, but its value is `undefined`.
// Warning: Failed prop type: The prop `isFavorite` is marked as required in `AddToListButton`, but its value is `undefined`.

const FilmScreen = (props) => {

  const {isFilmLoaded, loadFilmInfoAction, id} = props;

  useEffect(() => {
    if (!isFilmLoaded) {
      loadFilmInfoAction(id);
    }
  }, [id]);

  const {film, reviews, similarFilms, isUserLogged} = props;
  const {title, genre, year, poster, background, backgroundColor, isFavorite} = film;
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
              <PlayButton id = {id}></PlayButton>
              <AddToListButton id = {id} isFavorite = {isFavorite}/>
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

