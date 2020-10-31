import PropTypes from 'prop-types';
import React from "react";
import {connect} from 'react-redux';
import {ALL_GENRES_FILTER} from '../../const';
import {changeCurrentGenre, increaseShownFilmsCount, resetShownFilmsCount, setFilteredFilms} from '../../store/action';
import {getGenresList} from '../../utils/films';
import {filmShape} from "../../utils/props-validation";
import FilmsList from "../films-list/films-list";
import GenreFilter from "../genre-filter/genre-filter";
import ShowMoreButton from '../show-more-button/show-more-button';

export const FilmCatalog = (props) => {
  const {films, currentGenre, genres, showLoadMoreButton} = props;
  const {onGenreChangeAction, onLoadMoreButtonClickAction} = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenreFilter
        genres={genres}
        onFilterChage = {(newGenre)=>{
          if (newGenre !== currentGenre) {
            onGenreChangeAction(newGenre);
          }
        }} activeFilter = {currentGenre}/>

      <FilmsList films = {films}/>

      {showLoadMoreButton && <ShowMoreButton onClick = {onLoadMoreButtonClickAction}/>}
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

const mapStateToProps = ({CATALOG, DATA}) => {
  const films = CATALOG.currentGenre === ALL_GENRES_FILTER ? DATA.films : DATA.filteredFilms;
  const showLoadMoreButton = CATALOG.shownFilmsCount < films.length;

  return {
    films: films.slice(0, CATALOG.shownFilmsCount),
    genres: getGenresList(DATA.films),
    currentGenre: CATALOG.currentGenre,
    showLoadMoreButton};
};

const mapDispatchToProps = (dispatch) => ({
  onGenreChangeAction(currentGenre) {
    dispatch(changeCurrentGenre(currentGenre));
    dispatch(setFilteredFilms(currentGenre));
    dispatch(resetShownFilmsCount());
  },
  onLoadMoreButtonClickAction() {
    dispatch(increaseShownFilmsCount());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmCatalog);
