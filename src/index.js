import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import App from "./components/app/app";
import {films} from "./mocks/films.js";
import {generateMockReviews} from "./mocks/reviews";
import {createAPI} from "./services/api";
import {fetchFilms, fetchPromoFilm} from "./store/api-actions";
import {redirect} from "./store/middlewares/redirect";
import rootReducer from "./store/reducers/root-reducer";

const api = createAPI(()=>{});

const reviews = generateMockReviews(films);
const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)));
Promise.all(
    [store.dispatch(fetchPromoFilm())],
    [store.dispatch(fetchFilms())])
  .then(()=>{
    ReactDOM.render(
        <Provider store={store}>
          <App reviews = {reviews}/>
        </Provider>,
        document.querySelector(`#root`)
    );
  });
