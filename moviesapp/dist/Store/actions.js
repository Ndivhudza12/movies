"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovieDetailsById = exports.getMoviesbySearchQuery = exports.getMovies = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const axios_1 = __importDefault(require("axios"));
// actions are processes that get data from backend
exports.getMovies = (0, toolkit_1.createAsyncThunk)("movies/getMovies", (searchQuery, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const response = yield axios_1.default.get(`https://search.imdbot.workers.dev/?q=${searchQuery}`);
        return (_a = response.data) === null || _a === void 0 ? void 0 : _a.description;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}));
// actions are processes that get data from backend
exports.getMoviesbySearchQuery = (0, toolkit_1.createAsyncThunk)("movies/getMoviesbySearchQuery", (searchQuery, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const response = yield axios_1.default.get(`https://search.imdbot.workers.dev/?q=${searchQuery}`);
        return (_b = response.data) === null || _b === void 0 ? void 0 : _b.description;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}));
exports.getMovieDetailsById = (0, toolkit_1.createAsyncThunk)("movies/getMovieDetailsById", (id, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4;
    try {
        const response = yield axios_1.default.get(`https://search.imdbot.workers.dev/?tt=${id}`);
        const data = response.data;
        const formmattedData = {
            title: ((_c = data.short) === null || _c === void 0 ? void 0 : _c.name) || '',
            description: ((_d = data.short) === null || _d === void 0 ? void 0 : _d.description) || '',
            type: ((_e = data.short) === null || _e === void 0 ? void 0 : _e['@type']) || '',
            trailerurl: ((_f = data.short) === null || _f === void 0 ? void 0 : _f.trailerurl) || '',
            actors: (_g = data.short) === null || _g === void 0 ? void 0 : _g.actor,
            aggregateRating: (_h = data.short) === null || _h === void 0 ? void 0 : _h.aggregateRating,
            datePublished: ((_j = data.short) === null || _j === void 0 ? void 0 : _j.datePublished) || '',
            genres: (_k = data.short) === null || _k === void 0 ? void 0 : _k.genre,
            image: ((_l = data.short) === null || _l === void 0 ? void 0 : _l.image) || '',
            keywords: ((_m = data.short) === null || _m === void 0 ? void 0 : _m.keywords) || '',
            review: {
                author: ((_p = (_o = data.short) === null || _o === void 0 ? void 0 : _o.review) === null || _p === void 0 ? void 0 : _p.author.name) || '',
                createdDate: ((_r = (_q = data.short) === null || _q === void 0 ? void 0 : _q.review) === null || _r === void 0 ? void 0 : _r.dateCreated) || '',
                reviewTitle: ((_t = (_s = data.short) === null || _s === void 0 ? void 0 : _s.review) === null || _t === void 0 ? void 0 : _t.name) || '',
                reviewBody: ((_v = (_u = data.short) === null || _u === void 0 ? void 0 : _u.review) === null || _v === void 0 ? void 0 : _v.reviewBody) || '',
                reviewRating: {
                    ratingValue: ((_y = (_x = (_w = data.short) === null || _w === void 0 ? void 0 : _w.review) === null || _x === void 0 ? void 0 : _x.reviewRating) === null || _y === void 0 ? void 0 : _y.ratingValue) || 0,
                    bestRating: ((_1 = (_0 = (_z = data.short) === null || _z === void 0 ? void 0 : _z.review) === null || _0 === void 0 ? void 0 : _0.reviewRating) === null || _1 === void 0 ? void 0 : _1.bestRating) || 0,
                    worstRating: ((_4 = (_3 = (_2 = data.short) === null || _2 === void 0 ? void 0 : _2.review) === null || _3 === void 0 ? void 0 : _3.reviewRating) === null || _4 === void 0 ? void 0 : _4.worstRating) || 0,
                }
            },
        };
        return formmattedData;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}));
