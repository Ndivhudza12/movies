"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const MoviesCard_1 = __importDefault(require("./Movies/MoviesCard"));
const react_bootstrap_1 = require("react-bootstrap");
const SearchMovies_1 = __importDefault(require("./Movies/SearchMovies"));
const Main_module_scss_1 = __importDefault(require("./Main.module.scss"));
const Home = () => {
    return (react_1.default.createElement(react_bootstrap_1.Container, { className: Main_module_scss_1.default.homeContainer },
        react_1.default.createElement("h4", { className: Main_module_scss_1.default.headerMain }, "MOVIES HOME PAGE"),
        react_1.default.createElement("div", null,
            react_1.default.createElement(SearchMovies_1.default, null),
            react_1.default.createElement(MoviesCard_1.default, null))));
};
exports.default = Home;
