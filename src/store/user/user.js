import {extend} from "../../utils/common";
import {RequestStatus, AuthorizationStatus} from "../../const";

export const ActionType = {
  SET_AUTHORIZATION_STATUS: `SET_AUTHORIZATION_STATUS`,
  LOAD_USER: `LOAD_USER`,
  USER_REQUESTED: `USER_REQUESTED`,
  USER_RECEIVED: `USER_RECEIVED`,
  USER_REQUEST_FAILED: `USER_REQUEST_FAILED`,
};

const initialState = {
  // TODO: вернуть состояние по умолчанию AuthorizationStatus.NO_AUTH
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: {},
  requestStatus: RequestStatus.NOT_REQUESTED,
  errorCode: 0,
};

// Reducer

export const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTHORIZATION_STATUS:
      return extend(state, {authorizationStatus: action.payload});

    case ActionType.LOAD_USER:
      return extend(state, {userInfo: action.payload});

    case ActionType.USER_REQUESTED:
      return extend(state, {requestStatus: RequestStatus.REQUESTED});

    case ActionType.USER_REQUEST_FAILED:
      return extend(state, {requestStatus: RequestStatus.REQUEST_FAILED, errorCode: action.payload});

    case ActionType.USER_RECEIVED:
      return extend(state, {requestStatus: RequestStatus.RECIEVED});
  }

  return state;
};


// Actions

export const setAuthorizationStatus = (status) => ({
  type: ActionType.SET_AUTHORIZATION_STATUS,
  payload: status,
});

export const loadUser = (userInfo) => ({
  type: ActionType.LOAD_USER,
  payload: userInfo,
});

export const userRequested = () => ({
  type: ActionType.USER_REQUESTED,
  payload: {},
});

export const userReceived = () => ({
  type: ActionType.USER_RECEIVED,
  payload: {},
});

export const userRequestFailed = (error) => ({
  type: ActionType.USER_REQUEST_FAILED,
  payload: error,
});

