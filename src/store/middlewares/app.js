import {ActionType, request, success, failure} from "../actions/film";

export const filmMiddleware = (store) => (next) => async (action) => {
  next(action);
  
  if (action.type === ActionType.LOAD_FILM) {
    store.dispatch(request(action.payload));
    setTimeout(() => {
      store.dispatch(success({title: `Название`, video: `//url`}));
      console.log('success data');
    }, 10000);
  }
};
