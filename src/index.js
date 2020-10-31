import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import App from "./components/app/app";
import {films, promoFilm} from "./mocks/films.js";
import {generateMockReviews} from "./mocks/reviews";
import {createAPI} from "./services/api";
import rootReducer from "./store/reducers/root-reducer";

const api = createAPI(()=>{});

const reviews = generateMockReviews(films);
// window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(api)));

ReactDOM.render(
    <Provider store={store}>
      <App
        promoFilm = {promoFilm}
        films = {films}
        reviews = {reviews}/>
    </Provider>,
    document.querySelector(`#root`)
);
