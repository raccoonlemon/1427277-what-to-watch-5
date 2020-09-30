import React from "react";
import MainPage from "../main-page/main-page";

const App = (props) =>{
  // eslint-disable-next-line react/prop-types
  return (<MainPage movieInfo = {props.movieInfo}/>);
};

export default App;
