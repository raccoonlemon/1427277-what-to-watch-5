import MockAdapter from "axios-mock-adapter";
import {ApiURL, AuthorizationStatus, Path} from "../const";
import {createAPI} from "../services/api";
import {fetchFavoriteFilms, fetchFilmById, fetchFilms, fetchPromoFilm, fetchReviewsByFilmId, logIn, postReview} from "./api-actions";
import {ActionType as RedirectActionType} from "./middlewares/redirect";
import {ActionType as UserActionType} from "./user/user";
import {ActionType as FilmsActionType} from "./films/films";
import {ActionType as ReviewsActionType} from "./reviews/reviews";
import {adaptFilmToClient, adaptReviewToClient} from "../utils/data-adapter";

let api;
let apiMock;
let dispatch;

beforeEach(() => {
  api = createAPI(() => {});
  apiMock = new MockAdapter(api);
  dispatch = jest.fn();
});

describe(`Fetch user async operation works correctly`, () => {
  it(`with correct fake data`, () => {

    const fakeAuthInfo = {email: `test@test.ru`, password: `123456`};
    const fakeUser = {id: `123`};

    const loader = logIn(fakeAuthInfo);

    apiMock
        .onPost(ApiURL.LOGIN)
        .reply(200, fakeUser);

    return loader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(4);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: UserActionType.LOAD_USER,
        payload: fakeUser,
      });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: UserActionType.USER_RECEIVED,
        payload: {},
      });

      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: UserActionType.SET_AUTHORIZATION_STATUS,
        payload: AuthorizationStatus.AUTH,
      });

      expect(dispatch).toHaveBeenNthCalledWith(4, {
        type: RedirectActionType.REDIRECT_TO_ROUTE,
        payload: Path.MAIN_PAGE,
      });
    });
  });

  it(`with status 500`, () => {

    const fakeUser = {email: `test@test.ru`, password: `123456`};
    const loader = logIn(fakeUser);

    apiMock
        .onPost(ApiURL.LOGIN)
        .reply(500, {fake: `fake`});

    return loader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: UserActionType.USER_REQUEST_FAILED,
        payload: 500,
      });
    });
  });

});

it(`Fetch films async operation works correctly`, () => {
  const fakeFilms = [{id: 1, genre: ``}, {id: 2, genre: ``}];

  const loader = fetchFilms();

  apiMock
        .onGet(ApiURL.FILMS)
        .reply(200, fakeFilms);

  return loader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: FilmsActionType.LOAD_FILMS,
        payload: fakeFilms.map(adaptFilmToClient),
      });

    });
});

it(`Fetch film by id async operation works correctly`, () => {
  const fakeId = `1`;
  const fakeFilm = {id: 1, genre: ``};

  const loader = fetchFilmById(fakeId);

  apiMock
        .onGet(`${ApiURL.FILM_BY_ID}${fakeId}`)
        .reply(200, fakeFilm);

  return loader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: FilmsActionType.LOAD_FILM,
        payload: adaptFilmToClient(fakeFilm),
      });

    });
});

it(`Fetch promo film async operation works correctly`, () => {
  const fakeFilm = {id: 1, genre: ``};

  const loader = fetchPromoFilm();

  apiMock
        .onGet(ApiURL.PROMO_FILM)
        .reply(200, fakeFilm);

  return loader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: FilmsActionType.LOAD_PROMO_FILM,
        payload: adaptFilmToClient(fakeFilm),
      });

    });
});

it(`Fetch reviews by film id async operation works correctly`, () => {

  const fakeId = `1`;
  const fakeReviews = [
    {id: 1, date: `2020-10-26T13:38:44.769Z`, user: {name: `name`}},
    {id: 2, date: `2020-11-26T13:38:44.769Z`, user: {name: `name`}},
  ];

  const loader = fetchReviewsByFilmId(fakeId);

  apiMock
        .onGet(`${ApiURL.REVIEWS_BY_FILM_ID}${fakeId}`)
        .reply(200, fakeReviews);

  return loader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ReviewsActionType.LOAD_REVIEWS,
        payload: fakeReviews.map(adaptReviewToClient),
      });

    });
});

it(`Fetch favorite films async operation works correctly`, () => {
  const fakeFilms = [{id: 1, genre: ``}, {id: 2, genre: ``}];

  const loader = fetchFavoriteFilms();

  apiMock
        .onGet(ApiURL.FAVORITE)
        .reply(200, fakeFilms);

  return loader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: FilmsActionType.LOAD_FAVORITE_FILMS,
        payload: fakeFilms.map(adaptFilmToClient),
      });

    });
});

it(`Update is film favorite async operation works correctly`, () => {
  const fakeFilms = [{id: 1, genre: ``}, {id: 2, genre: ``}];

  const loader = fetchFavoriteFilms();

  apiMock
        .onGet(ApiURL.FAVORITE)
        .reply(200, fakeFilms);

  return loader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: FilmsActionType.LOAD_FAVORITE_FILMS,
        payload: fakeFilms.map(adaptFilmToClient),
      });

    });
});

describe(`Fetch user async operation works correctly`, () => {

  let fakeReview;
  let fakeFilmId;
  let loader;
  let url;

  beforeEach(() => {
    fakeReview = {rating: 5, comment: `comment`};
    fakeFilmId = `1`;
    loader = postReview(fakeFilmId, fakeReview.rating, fakeReview.comment);
    url = `${ApiURL.REVIEWS_BY_FILM_ID}${fakeFilmId}`;
  });

  it(`with request succeeded`, () => {

    apiMock
        .onPost(url)
        .reply(200, fakeReview);

    return loader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ReviewsActionType.SET_POSTED_REVIEW,
        payload: fakeReview,
      });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ReviewsActionType.REVIEW_POST_RECIEVED,
        payload: {},
      });

      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: RedirectActionType.REDIRECT_TO_ROUTE,
        payload: Path.filmScreen(fakeFilmId),
      });

    });
  });

  it(`with request failed`, () => {
    const errorCode = 500;

    apiMock
        .onPost(url)
        .reply(errorCode, {});

    return loader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ReviewsActionType.REVIEW_POST_FAILED,
        payload: errorCode,
      });

    });
  });

});
