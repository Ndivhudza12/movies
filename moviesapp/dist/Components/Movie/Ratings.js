"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const Movie_module_scss_1 = __importDefault(require("./Movie.module.scss"));
const Ratings = ({ selectedMovie }) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: Movie_module_scss_1.default.stats },
            react_1.default.createElement("h5", null, "Review Rating"),
            react_1.default.createElement(react_bootstrap_1.Row, { xs: 2, md: 2, xl: 2 },
                react_1.default.createElement("div", null, "Rating Value"),
                react_1.default.createElement("strong", { className: Movie_module_scss_1.default.ratings }, selectedMovie.review.reviewRating.ratingValue),
                react_1.default.createElement("div", null, "Best Rating"),
                react_1.default.createElement("strong", { className: Movie_module_scss_1.default.ratings }, selectedMovie.review.reviewRating.bestRating),
                react_1.default.createElement("div", null, "Worst Rating"),
                react_1.default.createElement("strong", { className: Movie_module_scss_1.default.ratings }, selectedMovie.review.reviewRating.worstRating))),
        react_1.default.createElement("div", { className: Movie_module_scss_1.default.stats },
            react_1.default.createElement("h5", null, "Aggregate Rating"),
            react_1.default.createElement(react_bootstrap_1.Row, { xs: 2, md: 2, xl: 2 },
                react_1.default.createElement("div", null, "Rating Count"),
                react_1.default.createElement("strong", { className: Movie_module_scss_1.default.ratings }, selectedMovie.aggregateRating.ratingCount),
                react_1.default.createElement("div", null, "Rating Value"),
                react_1.default.createElement("strong", { className: Movie_module_scss_1.default.ratings }, selectedMovie.aggregateRating.ratingValue),
                react_1.default.createElement("div", null, "Best Rating"),
                react_1.default.createElement("strong", { className: Movie_module_scss_1.default.ratings }, selectedMovie.aggregateRating.bestRating),
                react_1.default.createElement("div", null, "Worst Rating"),
                react_1.default.createElement("strong", { className: Movie_module_scss_1.default.ratings }, selectedMovie.aggregateRating.worstRating)))));
};
exports.default = Ratings;
