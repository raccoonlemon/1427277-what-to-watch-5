import PropTypes from 'prop-types';
import React from "react";
import Logo from '../logo/logo';
import UserMenu from '../user-menu/user-menu';

const Header = (props) =>{
  const {className, showUserBlock} = props;

  return (
    <header className={`page-header ${className}`}>
      <Logo/>
      {props.children}
      {showUserBlock && <UserMenu/>}
    </header>);
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
