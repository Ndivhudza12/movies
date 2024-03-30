"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Movie_module_scss_1 = __importDefault(require("./Movie.module.scss"));
const Overview = ({ selectedMovie }) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("em", null,
            "Type : ", selectedMovie === null || selectedMovie === void 0 ? void 0 :
            selectedMovie.type,
            " ",
            react_1.default.createElement("div", null,
                "Date Published : ",
                selectedMovie.datePublished)),
        react_1.default.createElement("div", { className: Movie_module_scss_1.default.overviewDetails },
            react_1.default.createElement("strong", null, "Keywords"),
            react_1.default.createElement("div", null,
                "  ",
                selectedMovie.keywords)),
        react_1.default.createElement("div", { className: Movie_module_scss_1.default.overviewDetails },
            react_1.default.createElement("strong", null, "Description"),
            react_1.default.createElement("div", null,
                " ",
                selectedMovie.description)),
        react_1.default.createElement("div", { className: Movie_module_scss_1.default.overviewDetails },
            react_1.default.createElement("strong", null, "Actors"),
            react_1.default.createElement("div", null, selectedMovie.actors.map((actor, index) => (react_1.default.createElement("a", { key: actor.url, href: actor.url, target: "_blank", rel: "noreferrer", className: Movie_module_scss_1.default.actorsLink }, actor.name))))),
        react_1.default.createElement("div", { className: Movie_module_scss_1.default.overviewDetails },
            react_1.default.createElement("strong", null, "Genres"),
            react_1.default.createElement("div", null, selectedMovie.genres.map((genre, index) => (react_1.default.createElement("span", null,
                genre,
                "  ")))))));
};
exports.default = Overview;
