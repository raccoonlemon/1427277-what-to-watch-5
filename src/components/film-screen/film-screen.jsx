import PropTypes from 'prop-types';
import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {Path} from "../../const";
import {loadFilm} from '../../store/actions/film';
import {fetchFilmById, fetchReviewsByFilmId} from '../../store/api-actions';
import {isFilmLoading, selectFilm, selectIsFilmLoaded, selectIsUserLogged, selectReviews, selectSimilarFilms} from '../../store/selectors';
import {filmShape, reviewShape} from "../../utils/props-validation";
import AddToListButton from '../add-to-list-button/add-to-list-button';
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

  const {film, reviews, similarFilms, isUserLogged, isFilmLoading} = props;
  const {title, genre, year, poster, background, backgroundColor, isFavorite} = film;

  return (<React.Fragment>
    {isFilmLoading && <h1>Loading ...</h1>}
    <section className="movie-card movie-card--full" style={{backgroundColor}}>
      <div className="movie-card__hero">
        {isFilmLoaded && <div className="movie-card__bg">
          <img src={background} alt={title} />
        </div>}

        <h1 className="visually-hidden">WTW</h1>
        <Header className="movie-card__head"/>

        {isFilmLoaded && <div className="movie-card__wrap">
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
              <AddToListButton id = {id} isFavorite = {isFavorite}/>
              {isUserLogged && <Link className="btn movie-card__button" to={Path.addReview(id)}>Add review</Link>}
            </div>
          </div>
        </div>}
      </div>

      {isFilmLoaded && <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={poster} alt={`${title} poster`} width="218" height="327" />
          </div>
          <FilmInfo film={film} reviews={reviews}/>
        </div>
      </div>
      }
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

  isFilmLoading: isFilmLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadFilmInfoAction(id) {
    dispatch(fetchFilmById(id));
    dispatch(fetchReviewsByFilmId(id));


    dispatch(loadFilm(id));
  },
});

FilmScreen.propTypes = {
  loadFilmInfoAction: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  film: filmShape.isRequired,
  isFilmLoaded: PropTypes.bool.isRequired,
  reviews: PropTypes.arrayOf(reviewShape).isRequired,
  similarFilms: PropTypes.arrayOf(filmShape).isRequired,
  isUserLogged: PropTypes.bool.isRequired,
};

export {FilmScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FilmScreen);

