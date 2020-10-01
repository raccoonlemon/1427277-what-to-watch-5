import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const movieInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const MockData = {
  MOVIE_INFO: movieInfo
};

ReactDOM.render(
    <App movieInfo = {MockData.MOVIE_INFO}/>,
    document.querySelector(`#root`)
);
