import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {Path} from "../../const";
import {filmShape} from '../../utils/props-validation';
import AddToListButton from '../add-to-list-button/add-to-list-button';
import PlayButton from '../play-button/play-button';

const FilmCard = (props) =>{
  const {film, isUserLogged} = props;
  const {title, genre, year, id, isFavorite} = film;


  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{year}</span>
      </p>

      <div className="movie-card__buttons">
        <PlayButton id = {id}/>
        <AddToListButton id = {id} isFavorite = {isFavorite}/>
        {isUserLogged && <Link className="btn movie-card__button" to={Path.addReview(id)}>Add review</Link>}
      </div>
    </div>
  );
};

FilmCard.propTypes = {
  film: filmShape,
  isUserLogged: PropTypes.bool,
};

export default FilmCard;
