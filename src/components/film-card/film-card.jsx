import React from "react";
import {filmShape} from '../../utils/props-validation';
import AddToListButton from '../add-to-list-button/add-to-list-button';
import PlayButton from '../play-button/play-button';

const FilmCard = (props) =>{
  const {film} = props;
  const {title, genre, year, poster, id, isFavorite} = film;


  return (<div className="movie-card__wrap">
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
          <PlayButton id = {id}/>
          <AddToListButton id = {id} isFavorite = {isFavorite}/>
        </div>
      </div>
    </div>
  </div>);
};

FilmCard.propTypes = {
  film: filmShape,
};

export default FilmCard;
