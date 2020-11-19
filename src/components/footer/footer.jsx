import PropTypes from 'prop-types';
import React from "react";
import Logo from '../logo/logo';

const Footer = (props) =>{
  const {className} = props;

  return (
    <footer className={`page-footer ${className}`}>
      <Logo className="logo__link--light"/>
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>);
};

Footer.defaultProps = {
  className: ``,
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
