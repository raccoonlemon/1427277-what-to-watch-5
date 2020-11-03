import PropTypes from 'prop-types';
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {selectIsUserLogged} from "../../store/reducers/selectors";

const renderUserBlock = (isLogged)=>{
  if (isLogged) {
    return (
      <div className="user-block__avatar">
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </div>
    );
  }

  return (<Link className="user-block__link" to = "/login">Sign in</Link>);
};

export class UserMenu extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {isUserLogged} = this.props;
    return (
      <div className="user-block">
        <div className="user-block">
          {renderUserBlock(isUserLogged)}
        </div>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  isUserLogged: selectIsUserLogged(state)
});

UserMenu.propTypes = {
  isUserLogged: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(UserMenu);
