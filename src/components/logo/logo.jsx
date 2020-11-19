import PropTypes from 'prop-types';
import React from "react";
import {Link} from 'react-router-dom';
import {Path} from '../../const';
import browserHistory from '../../utils/browser-history';

const Logo = (props) =>{
  const {className} = props;
  const isLinkActive = browserHistory.location.pathname !== Path.MAIN_PAGE;

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
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
