"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, 'build')));
app.get('/*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, 'build', 'index.html'));
});
app.use((req, res, next) => {
    res.status(200).json({ message: 'working' });
});
app.use((0, morgan_1.default)('dev'));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
exports.default = app;
