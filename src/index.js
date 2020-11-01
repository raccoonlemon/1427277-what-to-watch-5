import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import App from "./components/app/app";
import {films, promoFilm} from "./mocks/films.js";
import {generateMockReviews} from "./mocks/reviews";
import {createAPI} from "./services/api";
import {fetchFilms, fetchPromoFilm} from "./store/api-actions";
import rootReducer from "./store/reducers/root-reducer";

const api = createAPI(()=>{});

const reviews = generateMockReviews(films);
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

Promise.all(
    [store.dispatch(fetchPromoFilm())],
    [store.dispatch(fetchFilms())])
  .then(()=>{
    ReactDOM.render(
        <Provider store={store}>
          <App
            promoFilm = {promoFilm}
            films = {films}
            reviews = {reviews}/>
        </Provider>,
        document.querySelector(`#root`)
    );
  });
