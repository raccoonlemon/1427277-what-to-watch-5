import PropTypes from 'prop-types';
import React from "react";
import {connect} from 'react-redux';
import {updateIsFilmFavorite} from '../../store/api-actions';

export const AddToListButton = (props)=>{
  const {id, isFavorite, onClickAction} = props;

  return (<button
    className="btn btn--list movie-card__button"
    type="button"
    onClick = {()=>{
      onClickAction(id, !isFavorite);
    }}>
    <svg viewBox="0 0 19 20" width="19" height="20">
      <use xlinkHref={isFavorite ? `#in-list` : `#add`}></use>
    </svg>
    <span>My list</span>
  </button>);
};

AddToListButton.propTypes = {
  id: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onClickAction: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onClickAction(id, isFavorite) {
    dispatch(updateIsFilmFavorite(id, isFavorite));
  }
});

export default connect(null, mapDispatchToProps)(AddToListButton);
