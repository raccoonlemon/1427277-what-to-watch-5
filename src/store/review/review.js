import {RequestStatus} from "../../const";
import {extend} from "../../utils/common";
import {NameSpace} from "../namespace";

export const ActionType = {
  REVIEW_POST_REQUESTED: `REVIEW_POST_REQUESTED`,
  REVIEW_POST_RECIEVED: `REVIEW_POST_RECIEVED`,
  REVIEW_POST_FAILED: `REVIEW_POST_FAILED`,
  SET_POSTED_REVIEW: `SET_POSTED_REVIEW`
};

const initialState = {
  requestStatus: RequestStatus.NOT_REQUESTED,
  errorCode: null,
  postedReviews: []
};

// Reducer

export const review = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.REVIEW_POST_REQUESTED:
      return extend(state, {requestStatus: RequestStatus.REQUESTED});

    case ActionType.REVIEW_POST_FAILED:
      return extend(state, {requestStatus: RequestStatus.REQUEST_FAILED, errorCode: action.payload});

    case ActionType.REVIEW_POST_RECEIVED:
      return extend(state, {requestStatus: RequestStatus.RECIEVED});

    case ActionType.SET_POSTED_REVIEW:
      return extend(state, {postedReviews: action.payload});
  }

  return state;
};

// Actions

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

// Selectors

const nameSpace = NameSpace.REVIEW;

export const selectReviewRequestStatus = (state) => state[nameSpace].requestStatus;
export const selectIsReviewPostRequested = (state) => selectReviewRequestStatus(state) === RequestStatus.REQUESTED;
export const selectIsReviewPostFailed = (state) => selectReviewRequestStatus(state) === RequestStatus.REQUEST_FAILED;
export const selectReviewErrorCode = (state) => state[nameSpace].errorCode;
