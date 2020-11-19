import PropTypes from 'prop-types';
import React from "react";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {Path} from '../../const';
import {selectIsUserLogged, selectUserInfo} from '../../store/user/user';
import {userShape} from '../../utils/props-validation';

export const UserMenu = (props)=>{
  const {isUserLogged, userInfo} = props;
  const {avatarSrc} = userInfo;

  return (
    <div className="user-block">
      <div className="user-block">
        {!isUserLogged && <Link className="user-block__link" to = {Path.SIGN_IN}>Sign in</Link>}
        {isUserLogged &&
        <div className="user-block__avatar">
          <Link to = {Path.MY_LIST}>
            <img src={avatarSrc} alt="User avatar" width="63" height="63" />
          </Link>
        </div>}
      </div>
    </div>);
};

UserMenu.propTypes = {
  isUserLogged: PropTypes.bool.isRequired,
  userInfo: userShape.isRequired
};
const mapStateToProps = (state) => ({
  isUserLogged: selectIsUserLogged(state),
  userInfo: selectUserInfo(state)
});

export default connect(mapStateToProps)(UserMenu);
