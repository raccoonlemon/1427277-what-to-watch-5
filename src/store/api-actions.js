import {adaptFilmToClient} from "../utils/data-adapter";
import {loadFilms, loadPromoFilm} from "./action";

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(loadFilms(data.map(adaptFilmToClient))))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => dispatch(loadPromoFilm(adaptFilmToClient(data))))
);
