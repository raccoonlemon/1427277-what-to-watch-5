import PropTypes from 'prop-types';
import React from "react";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {Path} from '../../const';
import {selectIsUserLogged} from "../../store/selectors";

export const UserMenu = (props)=>{
  const {isUserLogged} = props;

  return (
    <div className="user-block">
      <div className="user-block">
        {!isUserLogged && <Link className="user-block__link" to = {Path.SIGN_IN}>Sign in</Link>}
        {isUserLogged &&
        <div className="user-block__avatar">
          <Link to = {Path.MY_LIST}>
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </Link>
        </div>}
      </div>
    </div>);
};

const mapStateToProps = (state) => ({
  isUserLogged: selectIsUserLogged(state)
});

UserMenu.propTypes = {
  isUserLogged: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(UserMenu);
