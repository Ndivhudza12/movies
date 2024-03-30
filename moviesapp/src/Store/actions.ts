import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IMovie, IMovieDetails } from "./types";

// actions are processes that get data from backend
export const getMovies = createAsyncThunk<IMovie[], string>(
    "movies/getMovies",
    async (searchQuery: string, thunkAPI) => {
        try {
            const response = await axios.get(`https://search.imdbot.workers.dev/?q=${searchQuery}`);
            return response.data?.description;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// actions are processes that get data from backend
export const getMoviesbySearchQuery = createAsyncThunk<IMovie[]>(
    "movies/getMoviesbySearchQuery",
    async (searchQuery, thunkAPI) => {
        try {
            const response = await axios.get(`https://search.imdbot.workers.dev/?q=${searchQuery}`);
            return response.data?.description;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);


export const getMovieDetailsById = createAsyncThunk<IMovieDetails, string>(
    "movies/getMovieDetailsById",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`https://search.imdbot.workers.dev/?tt=${id}`);
            const data = response.data;
            const formmattedData = {
                title: data.short?.name || '',
                description: data.short?.description || '',
                type: data.short?.['@type'] || '',
                trailerurl: data.short?.trailerurl || '',
                actors: data.short?.actor,
                aggregateRating: data.short?.aggregateRating,
                datePublished: data.short?.datePublished || '',
                genres: data.short?.genre,
                image: data.short?.image || '',
                keywords: data.short?.keywords || '',
                review: {
                    author: data.short?.review?.author.name || '',
                    createdDate: data.short?.review?.dateCreated || '',
                    reviewTitle: data.short?.review?.name || '',
                    reviewBody: data.short?.review?.reviewBody || '',
                    reviewRating: {
                        ratingValue: data.short?.review?.reviewRating?.ratingValue || 0,
                        bestRating: data.short?.review?.reviewRating?.bestRating || 0,
                        worstRating: data.short?.review?.reviewRating?.worstRating || 0,
                    }
                },
            };
            return formmattedData;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)