import PropTypes from 'prop-types';
import React from "react";
import {connect} from 'react-redux';
import {ALL_GENRES_FILTER, SHOW_MORE_FILMS_STEP} from '../../const';
import {changeCurrentGenre, increaseShownFilmsCount, resetShownFilmsCount} from '../../store/action';
import {selectFilms, selectCurrentGenre, selectShownFilmsCount, selectFilteredFilms} from '../../store/reducers/selectors';
import {getGenresList} from '../../utils/films';
import {filmShape} from "../../utils/props-validation";
import FilmsList from "../films-list/films-list";
import GenreFilter from "../genre-filter/genre-filter";
import ShowMoreButton from '../show-more-button/show-more-button';

export const FilmCatalog = (props) => {
  const {films, currentGenre, genres, needToShowLoadMoreButton} = props;
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

      {needToShowLoadMoreButton && <ShowMoreButton onClick = {onLoadMoreButtonClickAction}/>}
    </section>);
};

FilmCatalog.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(filmShape).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  needToShowLoadMoreButton: PropTypes.bool.isRequired,
  onGenreChangeAction: PropTypes.func.isRequired,
  onLoadMoreButtonClickAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const films = selectFilms(state);
  const currentGenre = selectCurrentGenre(state);
  const shownFilmsCount = selectShownFilmsCount(state);
  const filmsProp = currentGenre === ALL_GENRES_FILTER ? films : selectFilteredFilms(state);
  const needToShowLoadMoreButton = shownFilmsCount < filmsProp.length;

  return {
    films: filmsProp.slice(0, shownFilmsCount),
    genres: getGenresList(films),
    currentGenre,
    needToShowLoadMoreButton};
};

const mapDispatchToProps = (dispatch) => ({
  onGenreChangeAction(currentGenre) {
    dispatch(changeCurrentGenre(currentGenre));
    dispatch(resetShownFilmsCount());
  },
  onLoadMoreButtonClickAction() {
    dispatch(increaseShownFilmsCount(SHOW_MORE_FILMS_STEP));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmCatalog);
