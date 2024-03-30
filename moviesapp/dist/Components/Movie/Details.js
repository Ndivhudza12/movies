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
const react_router_dom_1 = require("react-router-dom");
const react_bootstrap_1 = require("react-bootstrap");
const Overview_1 = __importDefault(require("./Overview"));
const Ratings_1 = __importDefault(require("./Ratings"));
const Reviews_1 = __importDefault(require("./Reviews"));
const store_1 = require("../../Store/store");
const actions_1 = require("../../Store/actions");
const Loader_1 = __importDefault(require("../Loader/Loader"));
const react_bootstrap_icons_1 = require("react-bootstrap-icons");
const Movie_module_scss_1 = __importDefault(require("./Movie.module.scss"));
const Details = () => {
    const { id } = (0, react_router_dom_1.useParams)();
    const [activeTab, setActiveTab] = (0, react_1.useState)(1);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, store_1.useAppDispatch)();
    const { singleMovie } = (0, store_1.useAppSelector)((state) => state.movies);
    (0, react_1.useEffect)(() => {
        if (!id) {
            console.log("null id");
            return;
        }
        dispatch((0, actions_1.getMovieDetailsById)(id));
    }, [dispatch, id]);
    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };
    return (react_1.default.createElement(react_bootstrap_1.Container, null, singleMovie ? react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("br", null),
        react_1.default.createElement(react_bootstrap_1.Row, { xs: 1, md: 1, xl: 1, className: "g-4" },
            react_1.default.createElement("h4", { className: Movie_module_scss_1.default.movieDetails },
                react_1.default.createElement(react_bootstrap_icons_1.ArrowLeft, { color: "white", size: 50, className: Movie_module_scss_1.default.backBtn, onClick: () => navigate('/') }), singleMovie === null || singleMovie === void 0 ? void 0 :
                singleMovie.title)),
        react_1.default.createElement(react_bootstrap_1.Row, { xs: 2, md: 2, xl: 2, className: "g-4" },
            react_1.default.createElement(react_bootstrap_1.Col, null,
                react_1.default.createElement("div", { className: Movie_module_scss_1.default.tabsContainer },
                    react_1.default.createElement("img", { src: singleMovie === null || singleMovie === void 0 ? void 0 : singleMovie.image, alt: singleMovie === null || singleMovie === void 0 ? void 0 : singleMovie.title, className: Movie_module_scss_1.default.moviePoster }))),
            react_1.default.createElement(react_bootstrap_1.Col, null,
                react_1.default.createElement("div", { className: Movie_module_scss_1.default.tabsContainer },
                    react_1.default.createElement("div", { className: Movie_module_scss_1.default.tabButtons },
                        react_1.default.createElement("button", { className: activeTab === 1 ? Movie_module_scss_1.default.active : Movie_module_scss_1.default.inactiveTabs, onClick: () => handleTabClick(1) }, "Movie Details"),
                        react_1.default.createElement("button", { className: activeTab === 2 ? Movie_module_scss_1.default.active : Movie_module_scss_1.default.inactiveTabs, onClick: () => handleTabClick(2) }, "Review Ratings"),
                        react_1.default.createElement("button", { className: activeTab === 3 ? Movie_module_scss_1.default.active : Movie_module_scss_1.default.inactiveTabs, onClick: () => handleTabClick(3) }, "Review Comments")),
                    react_1.default.createElement("div", { className: Movie_module_scss_1.default.tabsContent },
                        activeTab === 1 && singleMovie && react_1.default.createElement(Overview_1.default, { selectedMovie: singleMovie }),
                        activeTab === 2 && singleMovie && react_1.default.createElement(Ratings_1.default, { selectedMovie: singleMovie }),
                        activeTab === 3 && singleMovie && react_1.default.createElement(Reviews_1.default, { selectedMovie: singleMovie })))))) : react_1.default.createElement(Loader_1.default, null)));
};
exports.default = Details;
