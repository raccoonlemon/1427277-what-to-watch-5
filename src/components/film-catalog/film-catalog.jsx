import PropTypes from 'prop-types';
import React from "react";
import {connect} from 'react-redux';
import {ALL_GENRES_FILTER} from '../../const';
import {ActionCreator} from '../../store/action';
import {getGenresList} from '../../utils/films';
import {filmShape} from "../../utils/props-validation";
import {FilmsList} from "../films-list/films-list";
import GenreFilter from "../genre-filter/genre-filter";

export const FilmCatalog = (props) => {
  const {films, currentGenre, genres, showLoadMoreButton} = props;
  const {onGenreChangeAction, onLoadMoreButtonClickAction} = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenreFilter genres={genres} onFilterChage = {(newGenre)=>{
        if (newGenre !== currentGenre) {
          onGenreChangeAction(newGenre);
        }
      }} activeFilter = {currentGenre}/>

      <FilmsList films = {films}/>

      {showLoadMoreButton &&
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onLoadMoreButtonClickAction}>Show more</button>
    </div>}

    </section>);
};

FilmCatalog.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(filmShape).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  showLoadMoreButton: PropTypes.bool.isRequired,
  onGenreChangeAction: PropTypes.func.isRequired,
  onLoadMoreButtonClickAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const films = state.currentGenre === ALL_GENRES_FILTER ? state.films : state.filteredFilms;
  const showLoadMoreButton = state.shownFilmCount < films.length;

  return {
    films: films.slice(0, state.shownFilmCount),
    genres: getGenresList(state.films),
    currentGenre: state.currentGenre,
    showLoadMoreButton};
};

const mapDispatchToProps = (dispatch) => ({
  onGenreChangeAction(currentGenre) {
    dispatch(ActionCreator.changeCurrentGenre(currentGenre));
    dispatch(ActionCreator.setFilteredFilms());
    dispatch(ActionCreator.resetShownFilmCount());
  },
  onLoadMoreButtonClickAction() {
    dispatch(ActionCreator.increaseShownFilmCount());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmCatalog);
