import PropTypes from 'prop-types';
import React from "react";
import {Link} from 'react-router-dom';
import {filmShape} from '../../utils/props-validation';
import VideoPlayer from '../video-player/video-player';

const getFilmCardContent = (film, isCardActive) =>{
  const {title, posterSmall, previewVideo} = film;

  if (isCardActive) {
    return (<VideoPlayer src = {previewVideo} poster = {posterSmall} />);
  }

  return (<img src={posterSmall} alt={title} width="280" height="175" />);
};

const FilmSmallCard = ({film, isCardActive, onMouseEnter, onMouseLeave})=>{
  const {title, id} = film;
  const link = `/films/${id}`;
  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={()=>onMouseEnter(id)} onMouseLeave={onMouseLeave}>
      <div className="small-movie-card__image">
        {getFilmCardContent(film, isCardActive)}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={link}>{title}</Link>
      </h3>
    </article>);
};

FilmSmallCard.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isCardActive: PropTypes.bool.isRequired,
  film: filmShape.isRequired
};

export default FilmSmallCard;
