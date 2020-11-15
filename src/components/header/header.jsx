import PropTypes from 'prop-types';
import React from "react";
import Logo from '../logo/logo';
import UserMenu from '../user-menu/user-menu';

const Header = (props) =>{
  const {className, needToShowUserMenu} = props;

  return (
    <header className={`page-header ${className}`}>
      <Logo/>
      {props.children}
      {needToShowUserMenu && <UserMenu/>}
    </header>);
};

Header.defaultProps = {
  className: ``,
  needToShowUserMenu: true
};

Header.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  needToShowUserMenu: PropTypes.bool,
};

export default Header;
