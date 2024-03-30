import { Dispatch } from "react";
import { IMovie, IMovieDetails, initialState, MoviesState } from "../Types/types";
import MovieSDK from "./Logic";

// Action Types
const FETCH_RANDOM_MOVIES_SUCCESS = 'FETCH_RANDOM_MOVIES_SUCCESS';
const FETCH_RANDOM_MOVIES_FAILURE = 'FETCH_RANDOM_MOVIES_FAILURE';

// Action Creators
const fetchRandomMoviesSuccess = (movies: IMovie[]) => ({
    type: FETCH_RANDOM_MOVIES_SUCCESS,
    payload: movies,
});

const fetchRandomMoviesFailure = (error: string) => ({
    type: FETCH_RANDOM_MOVIES_FAILURE,
    payload: error,
});


const movieReducer = (state = initialState, action: any): MoviesState => {
    switch (action.type) {
        case FETCH_RANDOM_MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.payload,
                errors: null,
            };
        case FETCH_RANDOM_MOVIES_FAILURE:
            return {
                ...state,
                movies: [],
                errors: action.payload,
            };
        default:
            return state;
    }
};

// Redux Thunk Action for fetching random movies
{/*export const fetchRandomMovies = () => async (dispatch: Dispatch) => {
  try {
    const movies = await MovieSDK.fetchRandomMovies();
    dispatch(fetchRandomMoviesSuccess(movies));
  } catch (error) {
    dispatch(fetchRandomMoviesFailure(error.message));
  }
};*/}
