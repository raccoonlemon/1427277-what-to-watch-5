
import MockAdapter from "axios-mock-adapter";
import {ApiURL, Path, RequestStatus} from "../../../const";
import {createAPI} from "../../../services/api";
import {logIn} from "../../api-actions";
import {AuthorizationStatus} from "../../const";
import {ActionType, loadUser, setAuthorizationStatus} from "../user/user";
import {user} from "../user";

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


const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: {},
    requestStatus: RequestStatus.NOT_REQUESTED,
    errorCode: 0,
  });
});

it(`Reducer should update authorizationStatus to "auth"`, () => {
  expect(user({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: ActionType.SET_AUTHORIZATION_STATUS,
    payload: AuthorizationStatus.AUTH
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH
  });
});

describe(`Async operation work correctly`, () => {

  // TODO - Доделать тест.
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = user;
    const test = logIn(fakeUser);

    apiMock
        .onPost(ApiURL.LOGIN)
        .reply(200, [{fake: true}]);

    return test(dispatch, () => {}, api)
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

