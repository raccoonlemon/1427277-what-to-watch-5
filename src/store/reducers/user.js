import {AuthorizationStatus, RequestStatus} from "../../const";
import {extend} from "../../utils/common";
import {ActionType} from "../actions/user";
const initialState = {
  // TODO: вернуть состояние по умолчанию AuthorizationStatus.NO_AUTH
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: {},
  requestStatus: RequestStatus.NOT_REQUESTED,
  error: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTHORIZATION_STATUS:
      return extend(state, {authorizationStatus: action.payload});

    case ActionType.LOAD_USER:
      return extend(state, {userInfo: action.payload});

    case ActionType.USER_REQUESTED:
      return extend(state, {requestStatus: RequestStatus.REQUESTED});

    case ActionType.USER_REQUEST_FAILED:
      return extend(state, {requestStatus: RequestStatus.REQUEST_FAILED, error: action.payload});

    case ActionType.USER_RECEIVED:
      return extend(state, {requestStatus: RequestStatus.RECIEVED});
  }

  return state;
};

export {user};
