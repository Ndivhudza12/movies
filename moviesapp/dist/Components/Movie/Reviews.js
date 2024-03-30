"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Reviews = ({ selectedMovie }) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("p", null,
            "Author: ",
            selectedMovie.review.author),
        react_1.default.createElement("h5", null, selectedMovie.review.reviewTitle),
        react_1.default.createElement("p", null, selectedMovie.review.reviewBody)));
};
exports.default = Reviews;
