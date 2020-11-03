import {AuthorizationStatus, Path} from "../const";
import {adaptFilmToClient} from "../utils/data-adapter";
import {loadFilms, loadPromoFilm, redirectToRoute, setAuthorizationStatus} from "./action";

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(loadFilms(data.map(adaptFilmToClient))))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => dispatch(loadPromoFilm(adaptFilmToClient(data))))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(setAuthorizationStatus(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(Path.MAIN_PAGE)))
);
