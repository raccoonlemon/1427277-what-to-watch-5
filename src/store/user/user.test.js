
import MockAdapter from "axios-mock-adapter";
import {ApiURL, AuthorizationStatus, Path, RequestStatus} from "../../const";
import {userAuthInfo} from "../../mocks/user";
import {createAPI} from "../../services/api";
import {logIn} from "../api-actions";
import {ActionType, loadUser, setAuthorizationStatus, userReducer} from "../user/user";

describe(`User action creators work correctly`, () => {

  it(`Set authorization status returns correct action`, () => {
    const status = AuthorizationStatus.AUTH;
    expect(setAuthorizationStatus(status)).toEqual({
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: status,
    });
  });

  it(`Load user returns correct action`, () => {
    expect(loadUser(`user`)).toEqual({
      type: ActionType.LOAD_USER,
      payload: `user`,
    });
  });

});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(userReducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: {},
    requestStatus: RequestStatus.NOT_REQUESTED,
    errorCode: 0,
  });
});

it(`Reducer should update authorizationStatus to "auth"`, () => {
  expect(userReducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: ActionType.SET_AUTHORIZATION_STATUS,
    payload: AuthorizationStatus.AUTH
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH
  });
});

describe(`Async operation work correctly`, () => {

  const api = createAPI(() => {});

  // TODO - Доделать тест.
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `test@test.ru`, password: `123456`};
    const loginLoader = logIn(fakeUser);

    apiMock
        .onPost(ApiURL.LOGIN)
        .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(2);

          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.REQUIRED_AUTHORIZATION,
            payload: AuthorizationStatus.AUTH,
          });

          expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: ActionType.REDIRECT_TO_ROUTE,
            payload: Path.MAIN_PAGE,
          });

        });
  });

});

