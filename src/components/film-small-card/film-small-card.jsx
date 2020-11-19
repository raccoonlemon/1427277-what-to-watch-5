import PropTypes from 'prop-types';
import React from "react";
import {Link} from 'react-router-dom';
import {Path} from '../../const';
import {filmShape} from '../../utils/props-validation';
import VideoPlayer from '../video-player/video-player';

const FilmSmallCard = ({film, isCardActive, onMouseEnter, onMouseLeave})=>{
  const {title, posterSmall, previewVideo, id} = film;
  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="small-movie-card__image">
        {isCardActive && <VideoPlayer src = {previewVideo} poster = {posterSmall} />}
        {!isCardActive && <img src={posterSmall} alt={title} width="280" height="175" />}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={Path.filmScreen(id)}>{title}</Link>
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
