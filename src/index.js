import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import App from "./components/app/app";
import {films, promoFilm} from "./mocks/films.js";
import {generateMockReviews} from "./mocks/reviews";
import rootReducer from "./store/reducers/root-reducer";

const reviews = generateMockReviews(films);

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

ReactDOM.render(
    <Provider store={store}>
      <App
        promoFilm = {promoFilm}
        films = {films}
        reviews = {reviews}/>
    </Provider>,
    document.querySelector(`#root`)
);
