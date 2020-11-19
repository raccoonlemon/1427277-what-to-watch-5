import PropTypes from 'prop-types';
import React from "react";
import {Link} from 'react-router-dom';
import {Path} from '../../const';

const PlayButton = (props) =>{
  const {id} = props;

  return (
    <Link to={Path.playerScreen(id)} className="btn btn--play movie-card__button" type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </Link>
  );
};

PlayButton.propTypes = {
  id: PropTypes.string,
};

export default PlayButton;
