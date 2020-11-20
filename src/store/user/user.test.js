
import {AuthorizationStatus, RequestStatus} from "../../const";
import {ActionType, loadUser, setAuthorizationStatus, userReceived, userReducer, userRequested, userRequestFailed} from "../user/user";
import {user} from "../../mocks/user";

describe(`User action creators returns correct actions`, () => {

  it(`set authorization status`, () => {
    const status = AuthorizationStatus.AUTH;
    expect(setAuthorizationStatus(status)).toEqual({
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: status,
    });
  });

  it(`load user`, () => {
    expect(loadUser(`user`)).toEqual({
      type: ActionType.LOAD_USER,
      payload: `user`,
    });
  });

  it(`set request status - "requested"`, () => {
    expect(userRequested()).toEqual({
      type: ActionType.USER_REQUESTED,
      payload: {},
    });
  });

  it(`set request status - "received"`, () => {
    expect(userReceived()).toEqual({
      type: ActionType.USER_RECEIVED,
      payload: {},
    });
  });

  it(`set request status - "request failed"`, () => {
    expect(userRequestFailed(`error`)).toEqual({
      type: ActionType.USER_REQUEST_FAILED,
      payload: `error`,
    });
  });

});

describe(`User reducer works correctly`, () => {

  it(`without additional parameters should return initial state`, () => {
    expect(userReducer(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      user: {},
      requestStatus: RequestStatus.NOT_REQUESTED,
      errorCode: 0,
    });
  });

  it(`should set authorizationStatus to "auth"`, () => {
    expect(userReducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: AuthorizationStatus.AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH
    });
  });

  it(`should load user`, () => {
    expect(userReducer({
      user: {},
    }, {
      type: ActionType.LOAD_USER,
      payload: user
    })).toEqual({
      user
    });
  });

  it(`should set request status "requested"`, () => {
    expect(userReducer({
      requestStatus: RequestStatus.NOT_REQUESTED,
    }, {
      type: ActionType.USER_REQUESTED,
      payload: {}
    })).toEqual({
      requestStatus: RequestStatus.REQUESTED
    });
  });

  it(`should set request status "received"`, () => {
    expect(userReducer({
      requestStatus: RequestStatus.REQUESTED,
    }, {
      type: ActionType.USER_RECEIVED,
      payload: {}
    })).toEqual({
      requestStatus: RequestStatus.RECIEVED
    });
  });


  it(`should set request status "request failed" and an error code`, () => {
    const errorCode = 404;
    expect(userReducer({
      requestStatus: RequestStatus.NOT_REQUESTED,
    }, {
      type: ActionType.USER_REQUEST_FAILED,
      payload: errorCode
    })).toEqual({
      requestStatus: RequestStatus.REQUEST_FAILED,
      errorCode,
    });
  });

});

// describe(`Async operation work correctly`, () => {

//   const api = createAPI(() => {});

//   // TODO - Доделать тест.
//   it(`Should make a correct API call to /login`, () => {
//     const apiMock = new MockAdapter(api);
//     const dispatch = jest.fn();
//     const fakeUser = {email: `test@test.ru`, password: `123456`};
//     const loginLoader = logIn(fakeUser);

//     apiMock
//         .onPost(ApiURL.LOGIN)
//         .reply(200, [{fake: true}]);

//     return loginLoader(dispatch, () => {}, api)
//         .then(() => {
//           expect(dispatch).toHaveBeenCalledTimes(2);

//           expect(dispatch).toHaveBeenNthCalledWith(1, {
//             type: ActionType.REQUIRED_AUTHORIZATION,
//             payload: AuthorizationStatus.AUTH,
//           });

//           expect(dispatch).toHaveBeenNthCalledWith(2, {
//             type: ActionType.REDIRECT_TO_ROUTE,
//             payload: Path.MAIN_PAGE,
//           });

//         });
//   });

// });

