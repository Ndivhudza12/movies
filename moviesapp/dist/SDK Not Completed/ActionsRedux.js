"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../Types/types");
// Action Types
const FETCH_RANDOM_MOVIES_SUCCESS = 'FETCH_RANDOM_MOVIES_SUCCESS';
const FETCH_RANDOM_MOVIES_FAILURE = 'FETCH_RANDOM_MOVIES_FAILURE';
// Action Creators
const fetchRandomMoviesSuccess = (movies) => ({
    type: FETCH_RANDOM_MOVIES_SUCCESS,
    payload: movies,
});
const fetchRandomMoviesFailure = (error) => ({
    type: FETCH_RANDOM_MOVIES_FAILURE,
    payload: error,
});
const movieReducer = (state = types_1.initialState, action) => {
    switch (action.type) {
        case FETCH_RANDOM_MOVIES_SUCCESS:
            return Object.assign(Object.assign({}, state), { movies: action.payload, errors: null });
        case FETCH_RANDOM_MOVIES_FAILURE:
            return Object.assign(Object.assign({}, state), { movies: [], errors: action.payload });
        default:
            return state;
    }
};
// Redux Thunk Action for fetching random movies
{ /*export const fetchRandomMovies = () => async (dispatch: Dispatch) => {
  try {
    const movies = await MovieSDK.fetchRandomMovies();
    dispatch(fetchRandomMoviesSuccess(movies));
  } catch (error) {
    dispatch(fetchRandomMoviesFailure(error.message));
  }
};*/
}
