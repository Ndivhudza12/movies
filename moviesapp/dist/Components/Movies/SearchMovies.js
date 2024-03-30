"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const store_1 = require("../../Store/store");
const moviesReducers_1 = require("../../Store/moviesReducers");
const actions_1 = require("../../Store/actions");
const Movies_module_scss_1 = __importDefault(require("./Movies.module.scss"));
const SearchMovies = () => {
    const dispatch = (0, store_1.useAppDispatch)();
    const { searchTerm } = (0, store_1.useAppSelector)((state) => state.movies);
    const handleSearchInputChange = (event) => {
        dispatch((0, moviesReducers_1.setSearchTerm)(event.target.value));
    };
    (0, react_1.useEffect)(() => {
        dispatch((0, actions_1.getMovies)(searchTerm));
    }, [dispatch, searchTerm]);
    return (react_1.default.createElement("input", { type: "text", value: searchTerm, onChange: handleSearchInputChange, placeholder: "Search movies", className: Movies_module_scss_1.default.searchBox }));
};
exports.default = SearchMovies;
