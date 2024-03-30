"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_bootstrap_1 = require("react-bootstrap");
const Modal_1 = __importDefault(require("react-bootstrap/Modal"));
const Loading_module_scss_1 = __importDefault(require("./Loading.module.scss"));
const react_1 = __importDefault(require("react"));
const Loader = () => {
    return (react_1.default.createElement(Modal_1.default, { show: true, backdrop: "static", keyboard: false, fullscreen: true },
        react_1.default.createElement("div", { className: Loading_module_scss_1.default.loadingBody },
            react_1.default.createElement(react_bootstrap_1.Spinner, { animation: "border", variant: "primary" }),
            react_1.default.createElement(react_bootstrap_1.Spinner, { animation: "border", variant: "secondary" }),
            react_1.default.createElement(react_bootstrap_1.Spinner, { animation: "border", variant: "success" }))));
};
exports.default = Loader;
