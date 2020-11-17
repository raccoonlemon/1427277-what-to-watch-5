import {ApiURL, AuthorizationStatus, Path, UserRequestErrorText} from "../const";
import {adaptFilmToClient, adaptReviewToClient, adaptUserToClient} from "../utils/data-adapter";
import {loadFavoriteFilms, loadFilm, loadFilms, loadPromoFilm, loadReviews, updateFilmsInfo} from "./actions/data";
import {loadUser, setAuthorizationStatus, userReceived, userRequestFailed} from "./actions/user";
import {redirectToRoute} from "./middlewares/redirect";

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(ApiURL.FILMS)
    .then(({data}) => dispatch(loadFilms(data.map(adaptFilmToClient))))
);

export const fetchFilmById = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiURL.FILM_BY_ID}${id}`)
    .then(({data}) => dispatch(loadFilm(adaptFilmToClient(data))))
);

export const fetchReviewsByFilmId = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiURL.REVIEWS_BY_FILM_ID}${id}`)
    .then(({data}) => dispatch(loadReviews(data.map(adaptReviewToClient))))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(ApiURL.PROMO_FILM)
    .then(({data}) => dispatch(loadPromoFilm(adaptFilmToClient(data))))
);

export const fetchFavoriteFilms = () => (dispatch, _getState, api) => (
  api.get(ApiURL.FAVORITE)
    .then(({data}) => dispatch(loadFavoriteFilms(data.map(adaptFilmToClient))))
);

export const updateIsFilmFavorite = (id, isFavotire) => (dispatch, _getState, api) => (
  api.post(`${ApiURL.FAVORITE}/${id}/${+isFavotire}`)
    .then(({data}) => dispatch(updateFilmsInfo(adaptFilmToClient(data))))
);

export const logIn = ({email, password}) => (dispatch, _getState, api) => (
  api.post(ApiURL.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(loadUser(adaptUserToClient(data)));
      dispatch(userReceived());
      dispatch(setAuthorizationStatus(AuthorizationStatus.AUTH));
    })
    .then(() => dispatch(redirectToRoute(Path.MAIN_PAGE)))
    .catch(({response})=>
      dispatch(userRequestFailed(response.status)))
);
