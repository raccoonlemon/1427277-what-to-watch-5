import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import App from "./components/app/app";
import {ALL_GENRES_FILTER} from "./const";
import {films, promoFilm} from "./mocks/films.js";
import {generateMockReviews} from "./mocks/reviews";
import {reducer} from "./store/reducer";

const preloadedState = {
  currentGenre: ALL_GENRES_FILTER,
  films
};

const store = createStore(reducer, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

const reviews = generateMockReviews(films);

ReactDOM.render(
    <Provider store={store}>
      <App
        promoFilm = {promoFilm}
        films = {films}
        reviews = {reviews}/>
    </Provider>,
    document.querySelector(`#root`)
);
