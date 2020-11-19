import {extend} from "../../utils/common";
import {RequestStatus, AuthorizationStatus} from "../../const";
import {NameSpace} from "../namespace";

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
  user: {},
  requestStatus: RequestStatus.NOT_REQUESTED,
  errorCode: 0,
};

// Reducer

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTHORIZATION_STATUS:
      return extend(state, {authorizationStatus: action.payload});

    case ActionType.LOAD_USER:
      return extend(state, {user: action.payload});

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

export const loadUser = (user) => ({
  type: ActionType.LOAD_USER,
  payload: user,
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

// Selectors

const nameSpace = NameSpace.USER;

export const selectAuthorizationStatus = (state) => state[nameSpace].authorizationStatus;
export const selectuser = (state) => state[nameSpace].user;
export const selectUserRequestErrorCode = (state) => state[nameSpace].errorCode;
export const selectUserRequestStatus = (state) => state[nameSpace].requestStatus;

export const selectIsUserRequested = (state) => selectUserRequestStatus(state) === RequestStatus.REQUESTED;
export const selectIsUserRequestFailed = (state) => selectUserRequestStatus(state) === RequestStatus.REQUEST_FAILED;
export const selectIsUserLogged = (state) => selectAuthorizationStatus(state) === AuthorizationStatus.AUTH;
