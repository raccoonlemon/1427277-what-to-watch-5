import { RequestStatus } from "../../const";

export const ActionType = {
  SET_AUTHORIZATION_STATUS: `SET_AUTHORIZATION_STATUS`,
  LOAD_USER: `LOAD_USER`,
  USER_REQUESTED: `USER_REQUESTED`,
  USER_RECEIVED: `USER_RECEIVED`,
  USER_REQUEST_FAILED: `USER_REQUEST_FAILED`,
};

export const setAuthorizationStatus = (status) => ({
  type: ActionType.SET_AUTHORIZATION_STATUS,
  payload: status,
});

export const userRequested = () => ({
  type: ActionType.userRequested,
  payload: RequestStatus.REQUESTED,
});

export const userReceived = () => ({
  type: ActionType.userRequested,
  payload: RequestStatus.RECIEVED,
});

export const userRequestFailed = () => ({
  type: ActionType.userRequested,
  payload: RequestStatus.REQUEST_FAILED,
});

