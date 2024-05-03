"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get404 = (req, res, next) => {
    const error = new Error('Welcome but if you see this, you hit a snag. check your routes, There are instructions in the README file located in the project folder on how to interact with this server. 🚀');
    error.status = 200;
    next(error);
};
exports.default = get404;
