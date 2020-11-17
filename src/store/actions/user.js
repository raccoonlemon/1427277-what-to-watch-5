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

