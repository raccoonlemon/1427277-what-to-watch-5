import PropTypes from 'prop-types';
import React from "react";
import {Link} from 'react-router-dom';
import {Path} from '../../const';

const Logo = (props) =>{
  const {className, isLinkActive} = props;

  const logo = (
    <React.Fragment>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </React.Fragment>);

  return (
    <div className={`logo `}>
      {isLinkActive
        ? <Link className={`logo__link ${className}`} to={Path.MAIN_PAGE}>{logo}</Link>
        : <a className={`logo__link ${className}`}>{logo}</a>}
    </div>);
};

Logo.defaultProps = {
  className: ``,
  isLinkActive: true
};

Logo.propTypes = {
  className: PropTypes.string,
  isLinkActive: PropTypes.bool
};

export default Logo;
