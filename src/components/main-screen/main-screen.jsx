import React from "react";
import PropTypes from 'prop-types';
import FilmsList from "../films-list/films-list";
import {filmShape} from "../../utils/props-validation";
import {Link} from "react-router-dom";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import GenreFilter from "../genre-filter/genre-filter";
import {getGenresList} from "../../utils/films";
import { ALL_GENRES_FILTER } from "../../const";

const MainScreen = (props) => {
  const {title, genre, year, poster, background} = props.promoFilm;
  const {films, filmsByGenre, genreFilter, onGenreFilterChange} = props;
  const genres = getGenresList(films);
  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={background} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            {/* <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div> */}
            <div className="user-block">
              <Link className="user-block__link" to = "/login">Sign in</Link>
            </div>
          </div>
        </header>

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

          <GenreFilter genres={genres} onFilterChage = {onGenreFilterChange} activeFilter = {genreFilter}/>

          <FilmsList films = {filmsByGenre}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

MainScreen.propTypes = {
  genreFilter: PropTypes.string.isRequired,
  promoFilm: filmShape.isRequired,
  films: PropTypes.arrayOf(filmShape).isRequired,
  filmsByGenre: PropTypes.arrayOf(filmShape).isRequired,
  onGenreFilterChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  genreFilter: state.genreFilter,
  filmsByGenre: state.genreFilter === ALL_GENRES_FILTER ? state.films : state.filteredFilms,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGenreFilterChange(genreFilter) {
    dispatch(ActionCreator.changeGenreFilter(genreFilter));
    dispatch(ActionCreator.filterFilmsByGenre());
  },
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
