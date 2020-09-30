import React from "react";
import MainPage from "../main-page/main-page";
import PropTypes from 'prop-types';

const App = (props) =>{
  return (<MainPage movieInfo = {props.movieInfo}/>);
};

App.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired
};

export default App;
