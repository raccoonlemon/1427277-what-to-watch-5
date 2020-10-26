import PropTypes from 'prop-types';
import React from "react";
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';

const Header = (props) =>{
  const {className, showUserBlock} = props;

  return (
    <header className={`page-header ${className}`}>
      <Logo/>
      {props.children}
      {showUserBlock &&
      <div className="user-block">
        <div className="user-block">
          <Link className="user-block__link" to = "/login">Sign in</Link>
        </div>
      </div>}
    </header>);

  // разметка для залогиненого пользователя
  // <div className="user-block__avatar">
  //    <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
  // </div>
};

Header.defaultProps = {
  className: ``,
  showUserBlock: true
};

Header.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  showUserBlock: PropTypes.bool,
};

export default Header;
