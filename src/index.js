import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {films} from "./mocks/films.js";
import {generateMockReviews} from "./mocks/reviews";

const movieInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const MockData = {
  MOVIE_INFO: movieInfo
};

const reviews = generateMockReviews(films);

ReactDOM.render(
    <App
      movieInfo = {MockData.MOVIE_INFO}
      films = {films}
      reviews = {reviews}/>,
    document.querySelector(`#root`)
);
