export const ActionType = {
  LOAD_FILM: `LOAD_FILM`,
  REQUEST: `REQUEST`,
  SUCCESS: `SUCCESS`,
  FAILURE: `FAILURE`,
};

export const loadFilm = (id)=>({
  type: ActionType.LOAD_FILM,
  payload: id
});

export const request = (id)=>({
  type: ActionType.REQUEST,
  payload: id
});

export const success = (data)=>({
  type: ActionType.SUCCESS,
  payload: data
});

export const failure = (error)=>({
  type: ActionType.FAILURE,
  payload: error
});


