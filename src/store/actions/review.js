export const ActionType = {
  REVIEW_POST_REQUESTED: `REVIEW_POST_REQUESTED`,
  REVIEW_POST_RECIEVED: `REVIEW_POST_RECIEVED`,
  REVIEW_POST_FAILED: `REVIEW_POST_FAILED`,
  SET_POSTED_REVIEW: `SET_POSTED_REVIEW`
};

export const reviewPostRequested = () => ({
  type: ActionType.REVIEW_POST_REQUESTED,
  payload: {},
});

export const reviewPostRecieved = () => ({
  type: ActionType.REVIEW_POST_RECIEVED,
  payload: {},
});

export const reviewPostFailed = (error) => ({
  type: ActionType.REVIEW_POST_FAILED,
  payload: error,
});

export const setPostedReview = (error) => ({
  type: ActionType.SET_POSTED_REVIEW,
  payload: error,
});

