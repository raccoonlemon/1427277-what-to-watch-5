
import {AuthorizationStatus} from "../../../const";
import {ActionType, loadUser, setAuthorizationStatus} from "../user";


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
