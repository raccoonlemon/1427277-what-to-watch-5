import PropTypes from 'prop-types';
import React from "react";
import {connect} from 'react-redux';
import {SHOW_MORE_FILMS_STEP} from '../../const';
import {changeCurrentGenre, increaseShownFilmsCount, resetShownFilmsCount, selectCurrentGenre, selectFilteredFilms, selectGenreList, selectIsAllFilmsShown, selectShownFilmsCount} from '../../store/catalog/catalog';
import {filmShape} from "../../utils/props-validation";
import FilmsList from "../films-list/films-list";
import GenreFilter from "../genre-filter/genre-filter";
import ShowMoreButton from '../show-more-button/show-more-button';

export const FilmCatalog = (props) => {
  const {films, currentGenre, genres, isAllFilmsShown} = props;
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

      {!isAllFilmsShown && <ShowMoreButton onClick = {onLoadMoreButtonClickAction}/>}
    </section>);
};

FilmCatalog.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(filmShape).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  isAllFilmsShown: PropTypes.bool.isRequired,
  onGenreChangeAction: PropTypes.func.isRequired,
  onLoadMoreButtonClickAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const shownFilmsCount = selectShownFilmsCount(state);
  const films = selectFilteredFilms(state).slice(0, shownFilmsCount);
  return {
    films,
    genres: selectGenreList(state),
    currentGenre: selectCurrentGenre(state),
    isAllFilmsShown: selectIsAllFilmsShown(state)};
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
