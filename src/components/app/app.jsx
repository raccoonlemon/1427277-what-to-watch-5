import React from "react";
import MainScreen from "../main-screen/main-screen";
import PropTypes from 'prop-types';

const App = (props) =>{
  return (<MainScreen movieInfo = {props.movieInfo}/>);
};

App.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired
};

export default App;
