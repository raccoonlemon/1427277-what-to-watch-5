import {RequestStatus} from "../../const";
import {reviews as mockReviews} from "../../mocks/reviews";
import {ActionType, reviewPostFailed, reviewPostRecieved, reviewsReducer, loadReviews, setPostedReview} from "../reviews/reviews";
import {reviewPostRequested} from "./reviews";

describe(`Reviews action creators returns correct actions`, () => {

  it(`load reviews`, () => {
    expect(loadReviews(mockReviews)).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: mockReviews,
    });
  });

  it(`set request post status - "requested"`, () => {
    expect(reviewPostRequested()).toEqual({
      type: ActionType.REVIEW_POST_REQUESTED,
      payload: {},
    });
  });

  it(`set request post status - "received"`, () => {
    expect(reviewPostRecieved()).toEqual({
      type: ActionType.REVIEW_POST_RECIEVED,
      payload: {},
    });
  });

  it(`set request post status - "request failed"`, () => {
    expect(reviewPostFailed(`error`)).toEqual({
      type: ActionType.REVIEW_POST_FAILED,
      payload: `error`,
    });
  });

  it(`set posted review`, () => {
    expect(setPostedReview(`review`)).toEqual({
      type: ActionType.SET_POSTED_REVIEW,
      payload: `review`,
    });
  });

});

describe(`User reducer works correctly`, () => {

  it(`without additional parameters should return initial state`, () => {
    expect(reviewsReducer(void 0, {})).toEqual({
      requestStatus: RequestStatus.NOT_REQUESTED,
      errorCode: 0,
      postedReviews: [],
      reviews: [],
    });
  });

  it(`should load reviews`, () => {
    expect(reviewsReducer({
      reviews: [],
    }, {
      type: ActionType.LOAD_REVIEWS,
      payload: mockReviews
    })).toEqual({
      reviews: mockReviews
    });
  });

  it(`should set request post status "requested"`, () => {
    expect(reviewsReducer({
      requestStatus: RequestStatus.NOT_REQUESTED,
    }, {
      type: ActionType.REVIEW_POST_REQUESTED,
      payload: {}
    })).toEqual({
      requestStatus: RequestStatus.REQUESTED
    });
  });

  it(`should set request post status "received"`, () => {
    expect(reviewsReducer({
      requestStatus: RequestStatus.REQUESTED,
    }, {
      type: ActionType.REVIEW_POST_RECIEVED,
      payload: {}
    })).toEqual({
      requestStatus: RequestStatus.RECIEVED
    });
  });

  it(`should set request post status "request failed" and an error code`, () => {
    const errorCode = 404;
    expect(reviewsReducer({
      requestStatus: RequestStatus.NOT_REQUESTED,
    }, {
      type: ActionType.REVIEW_POST_FAILED,
      payload: errorCode
    })).toEqual({
      requestStatus: RequestStatus.REQUEST_FAILED,
      errorCode,
    });
  });

  it(`should posted review`, () => {
    expect(reviewsReducer({
      postedReviews: [],
    }, {
      type: ActionType.SET_POSTED_REVIEW,
      payload: mockReviews[0]
    })).toEqual({
      postedReviews: mockReviews[0]
    });
  });

});
