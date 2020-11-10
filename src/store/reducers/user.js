import {AuthorizationStatus} from "../../const";
import {ActionType} from "../action";
const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTHORIZATION_STATUS:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
  }

  return state;
};

export {user};
