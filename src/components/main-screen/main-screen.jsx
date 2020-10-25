import PropTypes from 'prop-types';
import React from "react";
import {connect} from "react-redux";
import {ALL_GENRES_FILTER} from '../../const';
import {ActionCreator} from "../../store/action";
import {getGenresList} from "../../utils/films";
import {filmShape} from "../../utils/props-validation";
import FilmsList from "../films-list/films-list";
import Footer from "../footer/footer";
import GenreFilter from "../genre-filter/genre-filter";
import Header from "../header/header";

const MainScreen = (props) => {
  const {films, currentGenre, onGenreFilterChange, genres, promoFilm} = props;
  const {title, genre, year, poster, background} = promoFilm;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={background} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header className="movie-card__head" isLinkActive = {false}/>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={poster} alt={title} width="218" height="327" />
            </div>

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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreFilter genres={genres} onFilterChage = {onGenreFilterChange} activeFilter = {currentGenre}/>

          <FilmsList films = {films}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer/>
      </div>
    </React.Fragment>
  );
};

MainScreen.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  promoFilm: filmShape.isRequired,
  films: PropTypes.arrayOf(filmShape).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onGenreFilterChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: state.currentGenre === ALL_GENRES_FILTER ? state.films : state.filteredFilms,
  genres: getGenresList(state.films),
  currentGenre: state.currentGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreFilterChange(currentGenre) {
    dispatch(ActionCreator.changeCurrentGenre(currentGenre));
    dispatch(ActionCreator.setFilteredFilms());
  },
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
