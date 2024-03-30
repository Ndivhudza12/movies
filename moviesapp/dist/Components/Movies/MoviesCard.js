"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const react_router_dom_1 = require("react-router-dom");
const store_1 = require("../../Store/store");
const Loader_1 = __importDefault(require("../Loader/Loader"));
const Movies_module_scss_1 = __importDefault(require("./Movies.module.scss"));
const MovieCard = () => {
    const { movies } = (0, store_1.useAppSelector)((state) => state.movies);
    return (react_1.default.createElement(react_bootstrap_1.Row, { xs: 1, md: 2, xl: 4, className: "g-4" }, movies ? movies.map((item) => (react_1.default.createElement(react_bootstrap_1.Col, { key: item["#IMDB_ID"] },
        react_1.default.createElement(react_router_dom_1.Link, { to: `/movie/${item["#IMDB_ID"]}`, className: Movies_module_scss_1.default.cardLink },
            react_1.default.createElement(react_bootstrap_1.Card, { className: Movies_module_scss_1.default.cardData },
                react_1.default.createElement(react_bootstrap_1.Card.Body, null,
                    react_1.default.createElement(react_bootstrap_1.Card.Text, null,
                        item['#TITLE'],
                        " (",
                        item['#YEAR'],
                        ")"),
                    react_1.default.createElement(react_bootstrap_1.Card.Img, { src: item["#IMG_POSTER"], alt: item['#TITLE'] }),
                    "Actor: ",
                    react_1.default.createElement("em", null, item['#ACTORS']))))))) : react_1.default.createElement(Loader_1.default, null)));
};
exports.default = MovieCard;
