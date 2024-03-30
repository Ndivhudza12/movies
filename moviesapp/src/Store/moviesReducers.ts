import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie, initialState } from "./types";
import { getMovies, getMovieDetailsById } from "./actions";

// reducers -> reduce to a specific state -> changes state
export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<IMovie[]>) => {
            state.movies = action.payload
        },
        setSearchTerm(state, action: PayloadAction<string>) {
            state.searchTerm = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getMovies.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
            state.loading = false;
        });
        builder.addCase(getMovies.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
        });
        builder.addCase(getMovieDetailsById.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getMovieDetailsById.fulfilled, (state, action) => {
            state.singleMovie = action.payload;
            state.loading = false;
        });
    }
})

export default moviesSlice.reducer;
export const { setMovies, setSearchTerm } = moviesSlice.actions;