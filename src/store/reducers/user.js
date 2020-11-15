import {AuthorizationStatus} from "../../const";
import {ActionType} from "../action";
const initialState = {
  // TODO: вернуть состояние по умолчанию AuthorizationStatus.NO_AUTH
  authorizationStatus: AuthorizationStatus.AUTH,
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
