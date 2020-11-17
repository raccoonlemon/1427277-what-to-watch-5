import PropTypes from 'prop-types';
import React from "react";
import Logo from '../logo/logo';
import UserMenu from '../user-menu/user-menu';

const Header = (props) =>{
  const {className, needToShowUserMenu, isLinkActive} = props;

  return (
    <header className={`page-header ${className}`}>
      <Logo isLinkActive={isLinkActive}/>
      {props.children}
      {needToShowUserMenu && <UserMenu/>}
    </header>);
};

Header.defaultProps = {
  isLinkActive: true,
  className: ``,
  needToShowUserMenu: true
};

Header.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  isLinkActive: PropTypes.bool,
  needToShowUserMenu: PropTypes.bool,
};

export default Header;
