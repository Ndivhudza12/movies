"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSearchTerm = exports.setMovies = exports.moviesSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const types_1 = require("../Types/types");
const actions_1 = require("./actions");
// reducers -> reduce to a specific state -> changes state
exports.moviesSlice = (0, toolkit_1.createSlice)({
    name: "movies",
    initialState: types_1.initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(actions_1.getMovies.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(actions_1.getMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
            state.loading = false;
        });
        builder.addCase(actions_1.getMovies.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
        });
        builder.addCase(actions_1.getMovieDetailsById.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(actions_1.getMovieDetailsById.fulfilled, (state, action) => {
            state.singleMovie = action.payload;
            state.loading = false;
        });
    }
});
exports.default = exports.moviesSlice.reducer;
_a = exports.moviesSlice.actions, exports.setMovies = _a.setMovies, exports.setSearchTerm = _a.setSearchTerm;
