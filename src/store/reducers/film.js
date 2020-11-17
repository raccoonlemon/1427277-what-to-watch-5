import {ActionType} from "../actions/film";

const initialState = {
  data: null,
  status: null,
  error: null,
};

export const film = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUEST:
      return ({
        ...state,
        data: null,
        status: 'request',
      });
    case ActionType.SUCCESS:
      return ({
        ...state,
        data: action.payload,
        status: 'success',
        error: null,
      });
    case ActionType.FAILURE:
      return ({
        ...state,
        error: action.payload,
        status: 'error',
      });
  }

  return state;
};
