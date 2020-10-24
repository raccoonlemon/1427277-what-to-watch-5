import PropTypes from 'prop-types';
import React from "react";
import {Link} from 'react-router-dom';

const Header = (props) =>{
  const {isLinkActive, className, showUserBlock} = props;

  const logo = (
    <React.Fragment>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </React.Fragment>);

  return (
    <header className={`page-header ${className}`}>
      <div className="logo">
        {isLinkActive
          ? <Link className="logo__link" to="/">{logo}</Link>
          : <a className="logo__link">{logo}</a>}
      </div>
      {props.children}
      <div className="user-block">
        {showUserBlock &&
        <div className="user-block">
          <Link className="user-block__link" to = "/login">Sign in</Link>
        </div>}
      </div>
    </header>);

  // разметка для залогиненого пользователя
  // <div className="user-block__avatar">
  //    <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
  // </div>
};

Header.defaultProps = {
  classNames: ``,
  isLinkActive: true,
  showUserBlock: true
};

Header.propTypes = {
  children: PropTypes.element,
  className: PropTypes.arrayOf(PropTypes.string),
  isLinkActive: PropTypes.bool,
  showUserBlock: PropTypes.bool,
};

export default Header;
