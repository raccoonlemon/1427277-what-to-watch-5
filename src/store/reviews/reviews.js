import {RequestStatus} from "../../const";
import {extend} from "../../utils/common";
import {NameSpace} from "../namespace";

export const ActionType = {
  LOAD_REVIEWS: `LOAD_REWIEVS`,
  REVIEW_POST_REQUESTED: `REVIEW_POST_REQUESTED`,
  REVIEW_POST_RECIEVED: `REVIEW_POST_RECIEVED`,
  REVIEW_POST_FAILED: `REVIEW_POST_FAILED`,
  SET_POSTED_REVIEW: `SET_POSTED_REVIEW`,
};

const initialState = {
  requestStatus: RequestStatus.NOT_REQUESTED,
  errorCode: 0,
  postedReviews: [],
  reviews: [],
};

// Reducer

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.LOAD_REVIEWS:
      return extend(state, {reviews: action.payload});

    case ActionType.REVIEW_POST_REQUESTED:
      return extend(state, {requestStatus: RequestStatus.REQUESTED});

    case ActionType.REVIEW_POST_FAILED:
      return extend(state, {requestStatus: RequestStatus.REQUEST_FAILED, errorCode: action.payload});

    case ActionType.REVIEW_POST_RECIEVED:
      return extend(state, {requestStatus: RequestStatus.RECIEVED});

    case ActionType.SET_POSTED_REVIEW:
      return extend(state, {postedReviews: action.payload});
  }

  return state;
};

// Actions

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

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

export const setPostedReview = (review) => ({
  type: ActionType.SET_POSTED_REVIEW,
  payload: review,
});

// Selectors

const nameSpace = NameSpace.REVIEWS;

export const selectReviewRequestStatus = (state) => state[nameSpace].requestStatus;
export const selectIsReviewPostRequested = (state) => selectReviewRequestStatus(state) === RequestStatus.REQUESTED;
export const selectIsReviewPostFailed = (state) => selectReviewRequestStatus(state) === RequestStatus.REQUEST_FAILED;
export const selectReviewErrorCode = (state) => state[nameSpace].errorCode;
export const selectReviews = (state) => state[nameSpace].reviews;
