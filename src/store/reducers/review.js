import {RequestStatus} from "../../const";
import {extend} from "../../utils/common";
import {ActionType} from "../actions/review";

const initialState = {
  requestStatus: RequestStatus.NOT_REQUESTED,
  errorCode: null,
  postedReviews: []
};

const review = (state = initialState, action) => {
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

export {review};
