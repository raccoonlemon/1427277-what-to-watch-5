import browserHistory from "../../utils/browser-history";

export const ActionType = {
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`
};

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
