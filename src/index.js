import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {films, promoFilm} from "./mocks/films.js";
import {generateMockReviews} from "./mocks/reviews";

const reviews = generateMockReviews(films);

ReactDOM.render(
    <App
      promoFilm = {promoFilm}
      films = {films}
      reviews = {reviews}/>,
    document.querySelector(`#root`)
);
