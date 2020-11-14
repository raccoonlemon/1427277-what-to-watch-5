import PropTypes from 'prop-types';
import React from "react";
import {connect} from 'react-redux';
import {Path} from '../../const';
import {redirectToRoute} from '../../store/action';
import {updateIsFilmFavorite} from '../../store/api-actions';
import {selectIsUserLogged} from '../../store/selectors';

export const AddToListButton = (props)=>{
  const {id, isFavorite, onClickAction, redirectAction, isUserLogged} = props;

  return (<button
    className="btn btn--list movie-card__button"
    type="button"
    onClick = {()=>{
      if (!isUserLogged) {
        redirectAction();
      } else {
        onClickAction(id, !isFavorite);
      }
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
  onClickAction: PropTypes.func.isRequired,
  redirectAction: PropTypes.func.isRequired,
  isUserLogged: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isUserLogged: selectIsUserLogged(state)
});

const mapDispatchToProps = (dispatch) => ({
  onClickAction(id, isFavorite) {
    dispatch(updateIsFilmFavorite(id, isFavorite));
  },
  redirectAction() {
    dispatch(redirectToRoute(Path.SIGN_IN));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToListButton);
